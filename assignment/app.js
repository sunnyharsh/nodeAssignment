const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static("public"));

const adminRoute = require("./route/adminRoute")
app.use('/', adminRoute);

app.listen(1234, () => {
    console.log("server start....")
});