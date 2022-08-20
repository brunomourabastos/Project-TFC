import { Router } from 'express';
import LoginController from '../controllers/loginController';

const router = Router();

router.post('/login', LoginController.createLogin);

export default router;
