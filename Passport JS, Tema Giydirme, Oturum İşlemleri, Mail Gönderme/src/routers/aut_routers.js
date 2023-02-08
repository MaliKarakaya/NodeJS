const router = require('express').Router();
const authController=require('../controllers/auth_controlers');
const validatorMiddleware = require('../midlewares/validation_midleware');
const authMiddleware = require('../midlewares/aut_midlewares');

router.get('/login',authMiddleware.oturumAcilmamis,authController.LoginFormunuGoster);
router.post('/login',authMiddleware.oturumAcilmamis,validatorMiddleware.validateLogin(),authController.Login);

router.get('/register',authMiddleware.oturumAcilmamis,authController.RegisterFormunuGoster);
router.post('/register',authMiddleware.oturumAcilmamis,validatorMiddleware.validateNewUser(),authController.Register);

router.get('/forget_password',authMiddleware.oturumAcilmamis,authController.ForgetPasswordFormunuGoster);
router.post('/forget_password',authMiddleware.oturumAcilmamis,authController.ForgetPassword);

router.get('/logout',authMiddleware.oturumAcilmis,authController.logoutt);


module.exports = router;