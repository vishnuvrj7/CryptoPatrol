chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const blockedDomains = ["cryptojacking-domain1.com", "cryptominer.io"];
    const url = new URL(details.url);
    if (blockedDomains.includes(url.hostname)) {
      console.log(`Blocked cryptojacking attempt from ${url.hostname}`);
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Monitor CPU usage
let isMining = false;
setInterval(() => {
  chrome.system.cpu.getInfo(cpuInfo => {
    const totalUsage = cpuInfo.processors.reduce((total, proc) => total + proc.usage.kernel + proc.usage.user, 0);
    const averageUsage = totalUsage / cpuInfo.numOfProcessors;
    if (averageUsage > 80) { // Threshold for suspicious usage
      isMining = true;
      console.warn("Potential cryptojacking detected!");
    } else {
      isMining = false;
    }
  });
}, 5000);
