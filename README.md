# SourceHub Local Development

Because SourceHub uses **ES Modules** and the **Fetch API** for high performance and clean architecture, it cannot be run by simply opening `index.html` in a browser using the `file://` protocol. Browsers block these features for security when not served via a web server.

## How to Run Locally

### Option 1: VS Code (Recommended)
If you use VS Code, install the **Live Server** extension. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python (If installed)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Node.js / npx (If installed)
Run:
```bash
npx serve
```
Then visit the URL provided in the terminal.

## Why is the page blank?
When opening a local file directly:
1. **ES Modules** (`type="module"`) are blocked by Chrome/Edge/Firefox security policies.
2. **Fetch** requests to local JSON files are blocked by **CORS** (Cross-Origin Resource Sharing) policies.

Serving the project via a local web server solves both of these issues.
