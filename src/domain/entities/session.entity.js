export class Session {
  constructor(
    sessionId,
    token,
    createdAt,
    expiredAt,
    userId,
    ipAddress,
    isRevoked = false
  ) {
    this.sessionId = sessionId;
    this.token = token;
    this.createdAt = createdAt;
    this.expiredAt = expiredAt;
    this.userId = userId;
    this.ipAddress = ipAddress;
    this.isRevoked = isRevoked;
  }
}
