# AdOps Keyword Mate

A productivity Chrome Extension designed for AdTech recruiters, UA managers, and Sales professionals. It automates the process of inserting batches of industry-specific keywords into search bars, filters, or CRM input fields.

![Manifest](https://img.shields.io/badge/manifest-V3-blue)
![Category](https://img.shields.io/badge/category-Productivity-green)
![Version](https://img.shields.io/badge/version-3.1.5-orange)

## The Problem
When searching for candidates or companies on platforms like LinkedIn Recruiter or Sales Navigator, you often need to type dozens of keywords (e.g., "Programmatic", "AdOps", "Monetization") and press "Enter" after each one to create tags. Doing this manually is slow and repetitive.

## The Solution
**AdOps Keyword Mate** adds a context menu to your browser. simply right-click any input field, select a keyword category, and the extension will:
1.  **Type** the keyword into the field (simulating real user input).
2.  **Press Enter** automatically to lock the tag.
3.  **Repeat** for every keyword in the selected group.

## Features

* **Multi-Profile Support:** Switch between different keyword sets via the popup menu.
* **Localized Dictionaries:** Includes preset AdTech terminologies for:
    * 🇺🇸 English (General & Categorized)
    * 🇪🇸 Spanish
    * 🇫🇷 French
    * 🇩🇪 German
    * 🇵🇹 Portuguese
    * 🇵🇱 Polish
* **Smart Input Simulation:** Uses `InputEvent` and `KeyboardEvent` (Enter key) to ensure compatibility with complex React/Angular forms that require physical keystrokes to register data.
* **Context Menu Integration:** Accessible via Right-Click -> "Вставлятор текста".

## Profiles Included

You can switch the active profile by clicking the extension icon in the toolbar.

1.  **Main (English):** Comprehensive list including Programmatic, Marketing, Business, and C-Level terms.
2.  **Relevant:** A curated list focusing on core AdOps/Monetization roles.
3.  **Combined:** Aggregated list of the top two profiles.
4.  **Localized Profiles:** Translated industry terms for specific geo-targeting (Spain, France, Germany, Brazil/Portugal, Poland).

## Installation (Developer Mode)

1.  Clone or download this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer mode** (toggle in the top right corner).
4.  Click **Load unpacked**.
5.  Select the folder containing the extension files.

## Usage

1.  Click the extension icon in the Chrome toolbar.
2.  Select the desired profile (e.g., "🇪🇸. Spanish" or "Main Text").
3.  Go to your target website (e.g., LinkedIn).
4.  Click inside the search/filter input field.
5.  **Right-click** the input field.
6.  Hover over **"Вставлятор текста =>"** and select the specific category (e.g., "Programmatic" or "Marketing x Ads").
7.  Watch as the extension automatically types and adds the tags for you.

## Technical Details

* **Permissions:**
    * `contextMenus`: To add the right-click functionality.
    * `scripting`: To inject the typing logic into the active tab.
    * `storage`: To save your preferred profile selection.
* **Event Logic:**
    ```javascript
    // Simulates typing and pressing Enter
    const inputEvent = new InputEvent("input", { inputType: "insertText", data: word });
    el.dispatchEvent(inputEvent);
    el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", keyCode: 13 }));
    ```