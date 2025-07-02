document.addEventListener("DOMContentLoaded", function () {
  async function fetchMetrics() {
    try {
      const response = await fetch("http://localhost:5050/metrics"); // Flask server URL
      const data = await response.json();

      // Debugging: Log the alert status
      console.log("Alert Status:", data.alert);

      // Update UI
      document.getElementById("cpuUsage").innerText = `CPU: ${data.cpu.slice(-1)[0]}%`;
      document.getElementById("memoryUsage").innerText = `Memory: ${data.memory.slice(-1)[0]}%`;

      // Trigger alert only if alert status is true
      if (data.alert === true) {
        alert("High CPU Usage Detected!");
      }
    } catch (error) {
      console.error("Failed to fetch metrics:", error);
      document.getElementById("cpuUsage").innerText = "Error fetching CPU data";
      document.getElementById("memoryUsage").innerText = "Error fetching memory data";
    }
  }

  fetchMetrics();
  setInterval(fetchMetrics, 1000); // Update every second
});
