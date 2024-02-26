import { Request, Response } from 'express';
import { SessionService } from '../services/session.service';

const sessionService = new SessionService();

export class SessionController {
  async createSession(req: Request, res: Response): Promise<void> {
    try {
      const newSessionData = req.body;
      const newSession = sessionService.createSession(newSessionData);
      res.status(201).json(newSession);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getSessionById(req: Request, res: Response): Promise<void> {
    try {
      const { sessionId } = req.params;
      const session = sessionService.getSessionById(sessionId);
      if (!session) {
        res.status(404).json({ error: 'Session not found' });
      } else {
        res.status(200).json(session);
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllSessions(req: Request, res: Response): Promise<void> {
    try {
      const sessions = sessionService.getAllSessions();
      res.status(200).json(sessions);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
