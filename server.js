const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log("Server Listening on PORT ${PORT}");
});
