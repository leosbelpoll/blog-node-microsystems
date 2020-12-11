const express = require('express');
const parser = require('body-parser');

const config = require('../config');
const user = require('./components/user/network');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Router

app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log(`Api listening in port: ${config.api.port}`);
});
