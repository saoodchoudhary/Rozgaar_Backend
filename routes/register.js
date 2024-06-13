const { handleLogin } = require('../controllers/login');
const { handleRegister } = require('../controllers/register');

const Router = require('express').Router;

const router = Router();

router.post('/register', handleRegister);
router.post('/login', handleLogin);


module.exports = router;