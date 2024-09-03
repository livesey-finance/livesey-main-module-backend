export class User {
  constructor(
    userId,
    firstName,
    lastName,
    username,
    email,
    passwordHash,
    roleId,
    isActive,
    lastLoginAt = null,
    phoneNumber = null,
    createdAt,
    updatedAt
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
    this.roleId = roleId;
    this.isActive = isActive;
    this.lastLoginAt = lastLoginAt;
    this.phoneNumber = phoneNumber;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
