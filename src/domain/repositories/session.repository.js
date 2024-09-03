// session.repository.js

export class SessionRepository {
  constructor() {
    if (this.constructor === SessionRepository) {
      throw new Error('Cannot instantiate abstract class SessionRepository directly');
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

  async save(session) {
    throw new Error('Method \'save\' must be implemented.');
  }

  async delete(id) {
    throw new Error('Method \'delete\' must be implemented.');
  }

}
