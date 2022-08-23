import { Router } from 'express';
import teamController from '../controllers/teamController';

const router = Router();

router.get('/teams', teamController.getAll);
router.get('/teams/:id', teamController.getById);

export default router;
