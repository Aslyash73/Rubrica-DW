const express = require('express')
const configuracion = require("./config");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(configuracion.port, () => {
  console.log(`Example app listening on port ${configuracion.port}`);
});