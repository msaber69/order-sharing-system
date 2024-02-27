import { Session, SessionAttributes } from '../models/Session';

export class SessionService {
    async createSession(newSessionData: SessionAttributes): Promise<Session | null> {
        try {
            const createdSession = await Session.create(newSessionData);
            return createdSession;
        } catch (error) {
            console.error('Error creating session:', error);
            return null;
        }
    }

    async getSessionById(sessionId: string): Promise<Session | null> {
        try {
            const session = await Session.findByPk(sessionId);
            return session;
        } catch (error) {
            console.error('Error retrieving session by ID:', error);
            return null;
        }
    }

    async getAllSessions(): Promise<Session[] | null> {
        try {
            const sessions = await Session.findAll();
            return sessions;
        } catch (error) {
            console.error('Error retrieving all sessions:', error);
            return null;
        }
    }

    async updateSession(sessionId: string, updatedSessionData: Partial<SessionAttributes>): Promise<Session | null> {
        try {
            const session = await Session.findByPk(sessionId);
            if (!session) {
                return null;
            }
            await session.update(updatedSessionData);
            return session;
        } catch (error) {
            console.error('Error updating session:', error);
            return null;
        }
    }

    async deleteSession(sessionId: string): Promise<boolean> {
        try {
            const session = await Session.findByPk(sessionId);
            if (!session) {
                return false;
            }
            await session.destroy();
            return true;
        } catch (error) {
            console.error('Error deleting session:', error);
            return false;
        }
    }
}
