import {Router} from 'express';
import siteController from '../controllers/siteController';
const router = new Router();
router.get('/', siteController.getHomePage);
export default router;
