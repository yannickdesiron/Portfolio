import { createServer } from "http";
import next from "next";

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`🚀 Ready on http://localhost:${port}`);
  });
});