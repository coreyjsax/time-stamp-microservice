const timeController = require('../controllers/timeController');


exports.mainRoute = (req, res) => {
        res.json(timeController.getCurrentDate());
}

exports.formatRoute = (req, res) => {
        res.json(timeController.formatTime(req.params.time))
}

