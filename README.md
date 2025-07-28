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
## 🔗 Related Projects

Here are other repositories developed by me that focus on detecting and preventing **crypto-jacking** attacks:

### [CryptoGuardML](https://github.com/vishnuvrj7/CryptoGuardML)
A **machine learning-based crypto-jacking detection system** that analyzes system-level performance metrics (CPU, memory, etc.) to identify mining behavior.

- **Tech Stack**: Python, Scikit-learn, Pandas, Matplotlib  
- **Key Features**:
  - Dataset analysis
  - ML model training & evaluation
  - Early-stage detection of crypto-mining activity

---

### [CryptojackSentinal](https://github.com/vishnuvrj7/CryptojackSentinal)
An **advanced system-level sentinel** that detects and prevents stealthy crypto-mining scripts running on the machine, even outside the browser.

- **Tech Stack**: Python, psutil, watchdog, tkinter  
- **Key Features**:
  - Real-time monitoring of system processes
  - Alerts on suspicious mining behavior
  - Auto-kill mining processes with activity logs

---

> Explore these tools to build a complete defense system against in-browser and system-level crypto-jacking threats.


## License
This project is open-source and licensed under [MIT License](LICENSE).
