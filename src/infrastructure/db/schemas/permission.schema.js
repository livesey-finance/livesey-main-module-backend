export const PermissionSchema = {
  'Table': {
    'tableName': 'Permission',
    'columns': {
      'permissionId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'permissionName': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'description': {
        'type': 'text'
      }
    }
  }
};
