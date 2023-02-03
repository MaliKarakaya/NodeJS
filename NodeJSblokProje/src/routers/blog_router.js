const router = require('express').Router();
const blogController = require('../controllers/blog_controller');

router.post('/',blogController.aramaYap);
router.get('/',blogController.tumMakaleleriGetir);
router.get('/:id',blogController.tekMakaleGetir);
//router.get('/blog',blogController.tumMakaleleriGetir);

module.exports=router;