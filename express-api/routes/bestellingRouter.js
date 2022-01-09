const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const routers = {
    bestellingPost: router.post('/order', (req, res) => {
        const klant = {
            voorNaam: req.body.klant.voorNaam,
            achterNaam: req.body.klant.achterNaam,
            straat: req.body.klant.straat,
            huisnummer: req.body.klant.huisnummer,
            postcode: req.body.klant.postcode,
            gemeente: req.body.klant.gemeente,
            email: req.body.klant.email,
            telefoon: req.body.klant.telefoon,
        }

        const totaalprijs = req.body.producten.reduce((prijs, item) => (item.prijs * item.qty) + prijs, 0).toFixed(2);
        
        db.query(`INSERT INTO bestelling (created, voornaam, achternaam, straat, huisnummer, postcode, stad, telefoon, email, totaalprijs) VALUES 
            ("true", "${klant.voorNaam}", "${klant.achterNaam}", "${klant.straat}", "${klant.huisnummer}", ${klant.postcode}, "${klant.gemeente}", "${klant.telefoon}", "${klant.email}", ${totaalprijs})`, (err, results, fields) => {
            console.log(req.params.id);
            if (err){
                res.send(err);
            }

            res.json(results);
        });
    }),
}

module.exports = routers;