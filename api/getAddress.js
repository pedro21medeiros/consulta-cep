const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/:cep', (req, res) => {
    const cep = req.params.cep;
    const url = `https://ws.apicep.com/cep.json?code=${cep}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                res.status(400).json({
                    message: "CEP não encontrado"
                })
            } else {
                res.status(200).json({
                    message: "CEP encontrado",
                    data: data
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Erro interno do servidor"
            })
        })
})

module.exports = router;
