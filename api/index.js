const express = require('express');
const parser = require('body-parser');

const swaggerUI = require('swagger-ui-express');

const config = require('../config');
const user = require('./components/user/network');

const app = express();
app.use(parser.json());

const swaggerDoc = require('./swagger.json');

// Router

app.use('/api/user', user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log(`Api listening in port: ${config.api.port}`);
});
