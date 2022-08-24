import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const router = Router();

router.get('/leaderboard/home', LeaderboardController.getAll);

export default router;
