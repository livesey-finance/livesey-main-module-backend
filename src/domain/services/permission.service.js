import { PermissionRepository } from '../repositories/permission.repository.js';
import { Permission } from '../entities/permission.entity.d.ts';

export class PermissionService {
  constructor() {
    this.permissionRepository = new PermissionRepository();
  }

  async createPermission(permissionData) {
    const permission = new Permission(
      permissionData.permissionId,
      permissionData.permissionName,
      permissionData.description
    );
    await this.permissionRepository.save(permission);
    return permission;
  }

  async getPermissionById(id) {
    return await this.permissionRepository.findById(id);
  }

  async getAllPermissions() {
    return await this.permissionRepository.findAll();
  }

  async updatePermission(id, data) {
    await this.permissionRepository.update(id, data);
  }

  async deletePermission(id) {
    await this.permissionRepository.delete(id);
  }
}
