from flask import Flask, jsonify
from flask_cors import CORS
import psutil
import threading
import time
from collections import deque

app = Flask(__name__)
CORS(app)

cpu_history = deque(maxlen=60)
memory_history = deque(maxlen=60)

ALERT_THRESHOLD = 80  # CPU usage threshold

def monitor_system():
    while True:
        cpu_percent = psutil.cpu_percent()
        memory_percent = psutil.virtual_memory().percent
        
        cpu_history.append(cpu_percent)
        memory_history.append(memory_percent)
        
        time.sleep(1)

# Start monitoring in a separate thread
thread = threading.Thread(target=monitor_system, daemon=True)
thread.start()

@app.route('/metrics')
def get_metrics():
    # Trigger alert only if the most recent CPU usage exceeds the threshold
    cpu_alert = cpu_history and cpu_history[-1] > ALERT_THRESHOLD
    
    return jsonify({
        'cpu': list(cpu_history),
        'memory': list(memory_history),
        'alert': cpu_alert  # Send alert status
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)
