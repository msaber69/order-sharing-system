import { Session } from '../models/Session';

export class SessionService {
  private sessions: Session[] = [];

  createSession(newSession: Session): Session {
    // Generate a unique ID for the session
    const id = Math.random().toString(36).substring(2, 9);
    const sessionWithId: Session = { ...newSession, id };
    this.sessions.push(sessionWithId);
    return sessionWithId;
  }

  getSessionById(sessionId: string): Session | undefined {
    return this.sessions.find(session => session.id === sessionId);
  }

  getAllSessions(): Session[] {
    return this.sessions;
  }
}
