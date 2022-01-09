require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRouter = require('./routes/productRouter');
const bestellingRouter = require('./routes/bestellingRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());

app.use('/', productRouter.aanbevolenGet);
app.use('/', productRouter.productenGet);
app.use('/', productRouter.productIdGet);


app.use('/', bestellingRouter.bestellingPost);

module.exports = app;
