module.exports = (req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, content-type'
    );
    res.setHeader('Access-Control-Allow=Origin');
    next();

}