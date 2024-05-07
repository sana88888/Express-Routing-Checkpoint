const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.static("public"));

const testMiddleware = require("./middlewares/middlewares");
console.log(testMiddleware);
app.use(testMiddleware);

app.get("/", (req, res) => {
  const homePath = path.resolve("pages", "index.html");
  const data = fs.readFileSync(homePath, "utf-8");

  res.send(data);
});

app.get("/services", (req, res) => {
  const NosservicesPath = path.resolve("pages", "Nosservices.html");
  const data = fs.readFileSync(NosservicesPath, "utf-8");

  res.send(data);
});
app.get("/contact", (req, res) => {
  const contactPath = path.resolve("pages", "contact.html");
  const data = fs.readFileSync(contactPath, "utf-8");

  res.send(data);
});

app.listen(3000, () => {
  console.log("Le serveur est en cours d'écoute sur le port 3000.");
});
