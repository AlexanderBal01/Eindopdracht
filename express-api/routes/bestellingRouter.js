const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const routers = {
    bestellingGet: router.get('/bestelling/:id([0-9])', (req, res) => {
        db.query(`SELECT bestelling.*, product.* FROM bestelling JOIN product ON bestelling.productId=product.id WHERE bestelling.id=${req.params.id}`, (err, results, fields) => {
            if(err){
                res.send(err);
            }

            res.json(results);
        });
    }),

    bestellingPost: router.post('/order', (req, res) => {
        
    })
}

module.exports = routers;