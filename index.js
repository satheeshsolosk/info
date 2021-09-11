const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/myRecord", (request, response) => {
  console.log("request", request.body);
  myInformation = request.body;
  response.send({ response: "data received succesfully" });
});
app.get("/info", (request, response) => {
  response.send(myInformation);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
