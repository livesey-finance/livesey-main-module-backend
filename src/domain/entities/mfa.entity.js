export const Method = Object.freeze({
  SMS: 'SMS',
  EMAIL: 'EMAIL'
});

export class Mfa {
  constructor(
    mfaId,
    method,
    isEnabled,
    secretKey,
    userId,
    backupCodes = [],
    lastUsedAt = null
  ) {
    this.mfaId = mfaId;
    this.method = method;
    this.isEnabled = isEnabled;
    this.secretKey = secretKey;
    this.userId = userId;
    this.backupCodes = backupCodes;
    this.lastUsedAt = lastUsedAt;
  }
}
