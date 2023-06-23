const UserSettingsModel = require('../models/UserSettingsModel')

module.exports = async (req, res) => {
    const UserID = req.user;
    const viewProjects = true;
    const viewTasks = true;
    const viewCalendar = true;
    const viewNewProject = true;
    const viewNewTask = true;
    const filterDueDate = true;
    const filterDateEntered = false;
    const filterName = false;

    let exists = await UserSettingsModel.findOne({ UserID: UserID });
    if (!exists) {
    const settings = new UserSettingsModel({
        viewProjects,          
        viewTasks,          
        viewCalendar,        
        viewNewTask,
        viewNewProject,
        filterDueDate,
        filterDateEntered,
        filterName,
        UserID
    });    
    const newSettings = await settings.save();
    res.json(newSettings);}

    else {
        res.json({message : "User Settings Exist"})
    }
};