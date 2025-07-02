import psutil
from flask import Flask, render_template, jsonify
import threading
import time
import numpy as np
from collections import deque

app = Flask(__name__)

# Store historical CPU and memory usage
cpu_history = deque(maxlen=60)  # Store last 60 seconds
memory_history = deque(maxlen=60)


CPU_THRESHOLD = 80  
MEMORY_THRESHOLD = 85  
SUSTAINED_PERIOD = 10  

def monitor_system():
    while True:
        cpu_percent = psutil.cpu_percent()
        memory_percent = psutil.virtual_memory().percent
        
        cpu_history.append(cpu_percent)
        memory_history.append(memory_percent)
        
        # Check for sustained high usage
        if len(cpu_history) >= SUSTAINED_PERIOD:
            recent_cpu = list(cpu_history)[-SUSTAINED_PERIOD:]
            recent_memory = list(memory_history)[-SUSTAINED_PERIOD:]
            
            if (np.mean(recent_cpu) > CPU_THRESHOLD and 
                np.mean(recent_memory) > MEMORY_THRESHOLD):
                print("ALERT: Possible cryptojacking detected!")
                # You can add additional alert mechanisms here
        
        time.sleep(1)

@app.route('/metrics')
def get_metrics():
    return jsonify({
        'cpu': list(cpu_history),
        'memory': list(memory_history)
    })

@app.route('/monitor')
def monitor():
    return render_template('monitor.html')

# Start monitoring in a separate thread
monitor_thread = threading.Thread(target=monitor_system, daemon=True)
monitor_thread.start()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
