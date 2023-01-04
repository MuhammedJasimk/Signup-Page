const router = require('express').Router()
const userControler = require('../controller/user')


router.post('/fanSignup',userControler.fanSignup)

router.post('/talentSignup',userControler.talentSignup)

module.exports = router