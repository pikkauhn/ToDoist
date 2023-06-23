const UserSettingsModel = require('../models/UserSettingsModel');

module.exports = async (req, res) => {
    const user = req.user;
    const settings = await UserSettingsModel.find({ UserID: user });
    res.json(settings);
}