import { RoleRepository } from '../repositories/role.repository.js';
import { Role } from '../entities/role.entity.d.ts';

export class RoleService {
  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async createRole(roleData) {
    const role = new Role(
      roleData.roleId,
      roleData.roleName,
      roleData.permissions
    );
    await this.roleRepository.save(role);
    return role;
  }

  async getRoleById(id) {
    return await this.roleRepository.findById(id);
  }

  async getAllRoles() {
    return await this.roleRepository.findAll();
  }

  async updateRole(id, data) {
    await this.roleRepository.update(id, data);
  }

  async deleteRole(id) {
    await this.roleRepository.delete(id);
  }
}
