export const MfaSchema = {
  'Table': {
    'tableName': 'MFA',
    'columns': {
      'mfaId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'userId': {
        'type': 'uuid',
        'notNull': true
      },
      'method': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['SMS', 'EMAIL']
      },
      'isEnabled': {
        'type': 'boolean',
        'notNull': true
      },
      'secretKey': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'backupCodes': {
        'type': 'text[]'
      },
      'lastUsedAt': {
        'type': 'timestamp with time zone'
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
