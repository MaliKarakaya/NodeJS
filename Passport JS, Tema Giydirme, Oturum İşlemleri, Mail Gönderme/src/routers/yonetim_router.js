const router = require('express').Router();
const yonetimController = require('../controllers/yonetim_controlers');
const authMiddleware = require('../midlewares/aut_midlewares');


router.get('/',authMiddleware.oturumAcilmis, yonetimController.anaSayfayiGoster);



module.exports = router;







  