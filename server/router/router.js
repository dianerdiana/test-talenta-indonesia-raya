const express = require('express')
const router = express.Router()

// ** Controller
const { addData, getAllData, getBarData } = require('../controllers/users')

// ** Module User
router.post('/user', addData)
router.get('/user/list', getAllData)
router.get('/user/bar', getBarData)

module.exports = router
