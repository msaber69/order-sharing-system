import { Request, Response } from 'express';
import { SessionService } from '../services/session.service';
import { SessionAttributes } from '../models/Session';

const sessionService = new SessionService();

export class SessionController {
    async createSession(req: Request, res: Response): Promise<void> {
        try {
            const newSessionData: SessionAttributes = req.body;
            const createdSession = await sessionService.createSession(newSessionData);
            res.status(201).json(createdSession);
        } catch (error) {
            console.error('Error creating session:', error);
            res.status(500).json({ error: 'An error occurred while creating session' });
        }
    }

    async getSessionById(req: Request, res: Response): Promise<void> {
        try {
            const sessionId: string = req.params.sessionId;
            const session = await sessionService.getSessionById(sessionId);
            if (!session) {
                res.status(404).json({ error: 'Session not found' });
                return;
            }
            res.status(200).json(session);
        } catch (error) {
            console.error('Error retrieving session by ID:', error);
            res.status(500).json({ error: 'An error occurred while retrieving session' });
        }
    }

    async getAllSessions(req: Request, res: Response): Promise<void> {
        try {
            const sessions = await sessionService.getAllSessions();
            res.status(200).json(sessions);
        } catch (error) {
            console.error('Error retrieving all sessions:', error);
            res.status(500).json({ error: 'An error occurred while retrieving sessions' });
        }
    }

    async updateSession(req: Request, res: Response): Promise<void> {
        try {
            const sessionId: string = req.params.sessionId;
            const updatedSessionData: Partial<SessionAttributes> = req.body;
            const updatedSession = await sessionService.updateSession(sessionId, updatedSessionData);
            if (!updatedSession) {
                res.status(404).json({ error: 'Session not found' });
                return;
            }
            res.status(200).json(updatedSession);
        } catch (error) {
            console.error('Error updating session:', error);
            res.status(500).json({ error: 'An error occurred while updating session' });
        }
    }

    async deleteSession(req: Request, res: Response): Promise<void> {
        try {
            const sessionId: string = req.params.sessionId;
            const success = await sessionService.deleteSession(sessionId);
            if (!success) {
                res.status(404).json({ error: 'Session not found' });
                return;
            }
            res.status(204).end();
        } catch (error) {
            console.error('Error deleting session:', error);
            res.status(500).json({ error: 'An error occurred while deleting session' });
        }
    }
}
