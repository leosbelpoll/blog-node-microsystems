exports.success = (req, res, message = '', status = 200) => {
    res.status(status).send({
        error: null,
        status,
        body: message
    });
}

exports.error = (req, res, message = 'Internal server error', status = 500) => {
    res.status(status).send({
        error: message,
        status,
        body: null
    });
}
