import fs from "fs";
import https from "https";
import next from "next";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync("./certificates/localhost.key"),
  cert: fs.readFileSync("./certificates/localhost.crt"),
};

app.prepare().then(() => {
  https.createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Server started on ${process.env.NEXT_PUBLIC_HOST}`);
  });
});