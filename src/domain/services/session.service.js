import { SessionRepository } from '../repositories/session.repository.js';
import { Session } from '../entities/session.entity.d.ts';

export class SessionService {
  constructor() {
    this.sessionRepository = new SessionRepository();
  }

  async createSession(sessionData) {
    const session = new Session(
      sessionData.sessionId,
      sessionData.userId,
      sessionData.token,
      sessionData.createdAt,
      sessionData.expiredAt,
      sessionData.ipAddress,
      sessionData.isRevoked
    );
    await this.sessionRepository.save(session);
    return session;
  }

  async getSessionById(id) {
    return await this.sessionRepository.findById(id);
  }

  async getAllSessions() {
    return await this.sessionRepository.findAll();
  }

  async updateSession(id, data) {
    await this.sessionRepository.update(id, data);
  }

  async deleteSession(id) {
    await this.sessionRepository.delete(id);
  }
}
