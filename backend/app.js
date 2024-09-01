const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(require("./Router/routes"));

app.listen(8000, () => console.log("Server is listening"));
