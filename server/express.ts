// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
console.log("listening on http://localhost:3000/");
