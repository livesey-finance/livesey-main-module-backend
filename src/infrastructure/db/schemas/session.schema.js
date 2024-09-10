export const SessionSchema = {
  'Table': {
    'tableName': 'Session',
    'columns': {
      'sessionId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'userId': {
        'type': 'uuid',
        'notNull': true
      },
      'token': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'createdAt': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'expiredAt': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'ipAddress': {
        'type': 'varchar',
        'length': 45
      },
      'isRevoked': {
        'type': 'boolean',
        'notNull': true
      }
    },
    'relations': {
      'ManyToOne': {
        'relatedEntity': 'User',
        'foreignKey': 'userId'
      }
    }
  }
};
