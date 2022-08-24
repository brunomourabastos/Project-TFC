import { Router } from 'express';
import matchController from '../controllers/matchController';
import AuthToken from '../middleware/authTokenMiddleware';

const router = Router();

router.get('/matches', matchController.getInProgress);
router.post('/matches', AuthToken.authenticate, matchController.saveMatch);
router.patch('/matches/:id/finish', matchController.changeProgress);

export default router;
