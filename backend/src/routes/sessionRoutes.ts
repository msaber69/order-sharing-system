import express from 'express';
import { SessionController } from '../controllers/sessionController';

const router = express.Router();
const sessionController = new SessionController();

router.post('/', sessionController.createSession);
router.get('/', sessionController.getAllSessions);
router.get('/:sessionId', sessionController.getSessionById);
router.put('/:sessionId', sessionController.updateSession);
router.delete('/:sessionId', sessionController.deleteSession);

export default router;
