function runInsertWordsScript(tabId, words) {
  if (!Number.isInteger(tabId) || tabId < 0 || !Array.isArray(words) || words.length === 0) {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    func: async (wordList, insertDelayMs) => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      const dispatchInputEvent = (target, text) => {
        target.dispatchEvent(
          new InputEvent('input', {
            data: text,
            inputType: 'insertText',
            bubbles: true,
            cancelable: true
          })
        );
      };

      const commitEnter = (target) => {
        target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
        target.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      };

      const applyWord = (target, text) => {
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
          const start = Number.isInteger(target.selectionStart) ? target.selectionStart : target.value.length;
          const end = Number.isInteger(target.selectionEnd) ? target.selectionEnd : target.value.length;
          target.value = `${target.value.slice(0, start)}${text}${target.value.slice(end)}`;
          const caretPos = start + text.length;
          target.setSelectionRange(caretPos, caretPos);
          dispatchInputEvent(target, text);
          commitEnter(target);
          return true;
        }

        if (target && target.isContentEditable) {
          target.focus();
          const selection = window.getSelection();
          if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(text));
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
          } else {
            target.textContent = `${target.textContent || ''}${text}`;
          }
          dispatchInputEvent(target, text);
          commitEnter(target);
          return true;
        }

        return false;
      };

      const target = document.activeElement;
      if (!target) {
        return;
      }

      for (const rawWord of wordList) {
        const word = typeof rawWord === 'string' ? rawWord.trim() : '';
        if (!word) {
          continue;
        }
        applyWord(target, word);
        await delay(insertDelayMs);
      }
    },
    args: [words, EXTENSION_DEFAULTS.INSERT_DELAY_MS]
  });
}
