const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const os = require("os-utils");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname)); // Serve static files from the current directory

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("A user connected");

    setInterval(() => {
        os.cpuUsage((v) => {
            const data = {
                cpuUsage: (v * 100).toFixed(1), // CPU usage percentage
                freeMem: (os.freemem() * 1024).toFixed(1), // Free memory in MB
                totalMem: (os.totalmem() * 1024).toFixed(1), // Total memory in MB
                topProcess: "Simulated App", // Placeholder for top process
                topProcessCpu: (Math.random() * 50).toFixed(1), // Simulated top process CPU usage
            };

            // Emit data to frontend
            socket.emit("systemUpdate", data);

            // Check for high CPU usage
            if (data.cpuUsage > 80) {
                socket.emit(
                    "highCpuAlert",
                    `High CPU Usage Alert! (${data.cpuUsage}%) caused by: ${data.topProcess} (${data.topProcessCpu}%)`
                );
            }
        });
    }, 1000);
});

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
