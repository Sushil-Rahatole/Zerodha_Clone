const { Signup, Login } = require("../controllers/AuthController");
const router = require("express").Router();
const {userVerification} = require("../Middlewares/AuthMiddleware")

router.post("/signup", Signup);

router.post('/login', Login)

router.post('/api/auth/verify',userVerification)

module.exports = router