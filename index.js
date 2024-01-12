const express = require("express");
const Connection = require('./database/db')
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require("dotenv");
const Routes = require('./router/route')
const bodyParser = require('body-parser')

dotenv.config();
const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/' , Routes)

const PORT = 8000

Connection();

app.listen(PORT, console.log(`server started at ${PORT}`));
