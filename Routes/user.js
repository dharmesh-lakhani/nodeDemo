const express = require("express");
const router = express.Router();
const {Register, Login} = require('../controller/usercontroller')

router.post('/',Register);
router.post('/login',Login);

module.exports = router;