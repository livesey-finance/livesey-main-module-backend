export const Method = {
  SMS: 'SMS',
  EMAIL: 'EMAIL'
};
export class Mfa {
  constructor(mfaId, userId, method, isEnabled, secretKey, backupCodes = [], lastUsedAt = null) {
    this.mfaId = mfaId;
    this.userId = userId;
    this.method = method;
    this.isEnabled = isEnabled;
    this.secretKey = secretKey;
    this.backupCodes = backupCodes;
    this.lastUsedAt = lastUsedAt;
  }
}
