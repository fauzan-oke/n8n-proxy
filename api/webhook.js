export default async function handler(req, res) {
    try {
      // Forward request ke n8n self-host
      const response = await fetch("https://dev-kepegawaian.anri.go.id" + req.url, {
        method: req.method,
        headers: {
          ...req.headers,
          host: "dev-kepegawaian.anri.go.id",
        },
        body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
      });
  
      const text = await response.text();
  
      res.status(response.status).send(text);
    } catch (error) {
      console.error("Proxy error:", error);
      res.status(500).json({ error: "Proxy error" });
    }
  }
  