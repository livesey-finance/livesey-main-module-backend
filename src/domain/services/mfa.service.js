import { MfaRepository } from '../repositories/mfa.repository.js';
import { Mfa } from '../entities/mfa.entity.d.ts';

export class MfaService {
  constructor() {
    this.mfaRepository = new MfaRepository();
  }

  async createMfa(mfaData) {
    const mfa = new Mfa(
      mfaData.mfaId,
      mfaData.userId,
      mfaData.method,
      mfaData.isEnabled,
      mfaData.secretKey,
      mfaData.backupCodes,
      mfaData.lastUsedAt
    );
    await this.mfaRepository.save(mfa);
    return mfa;
  }

  async getMfaById(id) {
    return await this.mfaRepository.findById(id);
  }

  async getAllMfa() {
    return await this.mfaRepository.findAll();
  }

  async updateMfa(id, data) {
    await this.mfaRepository.update(id, data);
  }

  async deleteMfa(id) {
    await this.mfaRepository.delete(id);
  }
}
