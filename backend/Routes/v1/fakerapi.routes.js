const express = require("express");
const { getFakeUser, getFakeCompany } = require("../../Controllers/faker.controllers");
const router = express.Router();

router.get('/user', getFakeUser)
router.get('/company', getFakeCompany)
module.exports = router