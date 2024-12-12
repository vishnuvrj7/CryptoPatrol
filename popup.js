document.getElementById('refresh').addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: "refresh" });
});
