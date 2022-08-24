import { Router } from 'express';
import matchController from '../controllers/matchController';
import AuthToken from '../middleware/authTokenMiddleware';
import VerifyTeam from '../middleware/verifyTeamMiddleware';

const router = Router();

router.get('/matches', matchController.getInProgress);
router.post('/matches', AuthToken.authenticate, VerifyTeam.equalTeam, matchController.saveMatch);
router.patch('/matches/:id/finish', matchController.changeProgress);
router.patch('/matches/:id', matchController.updateResult);

export default router;
