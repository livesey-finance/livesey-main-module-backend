// role.repository.js

export class RoleRepository {
  constructor() {
    if (this.constructor === RoleRepository) {
      throw new Error('Cannot instantiate abstract class RoleRepository directly');
    }
  }

  async findById(id) {
    throw new Error('Method \'findById\' must be implemented.');
  }

  async findBy(criteria) {
    throw new Error('Method \'findBy\' must be implemented.');
  }

  async findAll() {
    throw new Error('Method \'findAll\' must be implemented.');
  }

  async update(id, data) {
    throw new Error('Method \'save\' must be implemented.');
  }

  async save(role) {
    throw new Error('Method \'save\' must be implemented.');
  }

  async delete(id) {
    throw new Error('Method \'delete\' must be implemented.');
  }

}
