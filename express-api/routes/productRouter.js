const express = require('express');
const router = express.Router();
const db = require('../config/db');

const routers = {
    aanbevolenGet: router.get('/aanbevolen', (req, res) => {
        db.query(`SELECT * FROM product WHERE aanbevolen="true"`, (err, results, fields) => {
            if (err){
                res.send(err);
            }

            res.json(results);
        });
    }),

    productenGet: router.get('/producten', (req, res) => {
        db.query(`SELECT * FROM product`, (err, results, fields) => {
            if (err){
                res.send(err);
            }

            res.json(results);
        });
    }),

    productIdGet: router.get('/producten/:id([0-9]+)', (req, res) => {
        db.query(`SELECT * FROM product WHERE id=${req.params.id}`, (err, results, fields) => {
            console.log(req.params.id);
            if (err){
                res.send(err);
            }

            res.json(results);
        });
    }),
}

module.exports = routers;