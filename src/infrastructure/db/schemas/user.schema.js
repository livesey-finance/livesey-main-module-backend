export const UserSchema = {
  'Table': {
    'tableName': 'User',
    'columns': {
      'userId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'firstName': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'lastName': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'username': {
        'type': 'varchar',
        'length': 255,
        'unique': true,
        'notNull': true
      },
      'email': {
        'type': 'varchar',
        'length': 255,
        'unique': true,
        'notNull': true
      },
      'passwordHash': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'photo': {
        'type': 'text'
      },
      'roleId': {
        'type': 'uuid',
        'notNull': true
      },
      'createdAt': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'updatedAt': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'lastLoginAt': {
        'type': 'timestamp with time zone'
      }
    },
    'relations': {
      'ManyToOne': {
        'relatedEntity': 'Role',
        'foreignKey': 'roleId'
      }
    }
  }
};
