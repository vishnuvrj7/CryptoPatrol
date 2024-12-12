const suspiciousPatterns = [/crypto/, /miner/, /hashrate/];
suspiciousPatterns.forEach(pattern => {
  if (document.body.innerHTML.match(pattern)) {
    console.warn("Potential cryptojacking script detected!");
  }
});
