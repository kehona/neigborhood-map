const express = require("express");

const data = require("./api/location");

let app = express();

app.get("/locations", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  data().then(result => res.send(result));
});
app.listen(8080, function() {
  console.log("Listening on port 8080");
});
