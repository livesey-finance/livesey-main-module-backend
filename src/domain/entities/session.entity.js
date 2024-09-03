export class Session {
  constructor(sessionId, userId, token, createdAt, expiredAt, ipAddress, isRevoked) {
    this.sessionId = sessionId;
    this.userId = userId;
    this.token = token;
    this.createdAt = createdAt;
    this.expiredAt = expiredAt;
    this.ipAddress = ipAddress;
    this.isRevoked = isRevoked;
  }
}
