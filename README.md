# Project Overview
This project appears to be a browser extension complemented by a Python backend script. The extension and the script may work together to provide specific functionalities.

## Features
- **Browser Extension:** Includes popup and background functionalities.
- **Python Backend:** Script (`app.py`) for additional features, potentially server-side logic.
- **Customizable Interface:** Popup UI and an icon for branding.

---

## File Details
### **Python Files:**
- **`app.py`**: The backend script; ensure dependencies like Flask are installed.

### **Browser Extension Files:**
- **`background.js`**: Contains background logic for the browser extension.
- **`icon.png`**: Icon for the browser extension.
- **`manifest.json`**: Configuration file that defines the extension's properties and permissions.
- **`popup.html`**: The popup interface shown in the browser.
- **`popup.js`**: Handles the JavaScript logic for the popup.

---

## How to Set Up

### **1. Set Up the Python Backend**
1. **Create a Virtual Environment:**
   ```bash
   python -m venv venv
   ```
2. **Activate the Virtual Environment:**
   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
3. **Install Dependencies:**
   ```bash
   pip install flask flask-socketio
   ```
4. **Run the Script:**
   ```bash
   python app.py
   ```

### **2. Install the Browser Extension**
1. **Load Unpacked Extension:**
   - Open your browser (e.g., Chrome).
   - Navigate to `chrome://extensions/`.
   - Enable Developer Mode.
   - Click **Load unpacked** and select the folder containing `manifest.json`.

2. **Test the Extension:**
   - Click on the extension icon in your browser toolbar.
   - Use the popup interface to interact with the extension.

---

## Troubleshooting

### **PowerShell Activation Issue**
If you encounter an error like `Execution of scripts is disabled on this system` when activating the virtual environment, run the following in PowerShell (as Administrator):
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```

---

## Future Improvements
- Add detailed documentation for `app.py` functionality.
- Include testing steps and troubleshooting tips for common issues.
- Provide a sample dataset or example use cases for better understanding.

---

## License
This project is open-source and licensed under [MIT License](LICENSE).
