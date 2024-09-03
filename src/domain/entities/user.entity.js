export class User {
  constructor(
    userId,
    firstName,
    lastName,
    username,
    email,
    passwordHash,
    role,
    isActive,
    createdAt,
    updatedAt,
    lastLoginAt = null,
    phoneNumber = null,
    photo = null
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role; // Role
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastLoginAt = lastLoginAt;
    this.phoneNumber = phoneNumber;
    this.photo = photo;
  }
}

