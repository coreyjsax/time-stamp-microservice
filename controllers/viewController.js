const timeStamp = require('../controllers/timeController');

exports.renderHome = (req, res) => {
    res.render('./index');
}