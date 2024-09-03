import { UserRepository } from '../repositories/user.repository.js';
import { User } from '../entities/user.entity.d.ts';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    const user = new User(
      userData.userId,
      userData.firstName,
      userData.lastName,
      userData.username,
      userData.email,
      userData.passwordHash,
      userData.role,
      userData.isActive,
      userData.createdAt,
      userData.updatedAt,
      userData.lastLoginAt,
      userData.phoneNumber,
      userData.photo
    );
    await this.userRepository.save(user);
    return user;
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async updateUser(id, data) {
    await this.userRepository.update(id, data);
  }

  async deleteUser(id) {
    await this.userRepository.delete(id);
  }
}
