const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const updateTodosRoute = require('./routes/updateTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const createTodosRoute = require('./routes/createTodosRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

const getProjectsRoute = require('./routes/getProjectsRoute');
const createProjectsRoute = require('./routes/createProjectsRoute');
const updateProjectsRoute = require('./routes/updateProjectsRoute');
const deleteProjectsRoute = require('./routes/deleteProjectsRoute');

const getUserSettingsRoute = require('./routes/getUserSettingsRoute');
const createUserSettingsRoute = require('./routes/createUserSettingsRoute');
const updateUserSettingsRoute = require('./routes/updateUserSettingsRoute');
const deleteUserSettingsRoute = require('./routes/deleteUserSettingsRoute');


const router = express.Router();

router.get('/todos', isLoggedIn, readTodosRoute);
// router.get('/projects', isLoggedIn, getProjectsRoute);
router.get('/settings', isLoggedIn, getUserSettingsRoute);

router.post('/todos', isLoggedIn, createTodosRoute);
// router.post('/projects', isLoggedIn, createProjectsRoute);
router.post('/settings', isLoggedIn, createUserSettingsRoute);

// router.put('/settings', isLoggedIn, updateUserSettingsRoute);
// router.put('/projects', isLoggedIn, updateProjectsRoute);
router.put('/todos/:id', isLoggedIn, updateTodosRoute);

router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);
// router.delete('/projects', isLoggedIn, deleteProjectsRoute);
// router.delete('/settings', isLoggedIn, deleteUserSettingsRoute);

module.exports = router;