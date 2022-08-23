import { Router } from 'express';
import matchController from '../controllers/matchController';

const router = Router();

router.get('/matches', matchController.getAll);

export default router;
