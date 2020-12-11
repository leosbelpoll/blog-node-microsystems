const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', (req, res) => {
    Controller.list()
        .then(list => response.success(req, res, list))
        .catch(error => response.error(req, res, error.message))
    
});

router.get('/:id', (req, res) => {
    Controller.get(req.params.id)
        .then(item => response.success(req, res, item))
        .catch(error => response.error(req, res, error.message))
});

router.post('/', (req, res) => {
    Controller.upsert(req.body)
        .then(item => response.success(req, res, item, 201))
        .catch(error => response.error(req, res, error.message))
});

router.delete('/:id', (req, res) => {
    Controller.remove(req.params.id)
        .then(item => response.success(req, res, item))
        .catch(error => response.error(req, res, error.message))
});

module.exports = router;
