import { Router } from 'express';
import LoginController from '../controllers/loginController';

const router = Router();

router.post('/login', LoginController.createLogin);
router.get('/login/validate', LoginController.validateToken);

export default router;
