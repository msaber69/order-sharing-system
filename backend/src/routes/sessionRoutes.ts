import express from 'express';
import { SessionController } from '../controllers/sessionController';

const router = express.Router();
const sessionController = new SessionController();

router.post('/sessions', sessionController.createSession);
router.get('/sessions/:sessionId', sessionController.getSessionById);
router.get('/sessions', sessionController.getAllSessions);

export default router;
