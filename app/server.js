const http = require("node:http");
const os = require("node:os");

const port = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("ok");
    return;
  }

  if (req.url === "/") {
    const body = JSON.stringify({
      service: "azure-aks-gitops-app",
      version: process.env.APP_VERSION || "local",
      environment: process.env.APP_ENV || "local",
      hostname: os.hostname()
    });

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(body);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`azure-aks-gitops-app listening on port ${port}`);
});
