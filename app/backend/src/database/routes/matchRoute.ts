import { Router } from 'express';
import matchController from '../controllers/matchController';

const router = Router();

router.get('/matches', matchController.getInProgress);

export default router;
