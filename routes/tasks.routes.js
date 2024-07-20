const express = require('express');
const router = express.Router()
const {getAllTasks} = require('../controllers/tasks.controller')

router.get('/',getAllTasks);


module.exports = router