const express = require('express')
const configuracion = require("./config");
const cors = require('cors');
const bodyParser = require("body-parser");
const parametroApi = require("./routers/parametro");
const clienteApi = require("./routers/cliente");
// const parametroApi = require("./routers/parametro");


const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
parametroApi(app);
clienteApi(app);


app.listen(configuracion.port, () => {
  console.log(`Example app listening on port ${configuracion.port}`);
});