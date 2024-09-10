export const RoleSchema = {
  'Table': {
    'tableName': 'Role',
    'columns': {
      'roleId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'roleName': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      }
    },
    'relations': {
      'ManyToMany': {
        'relatedEntity': 'Permission',
        'relationTable': 'RolePermissions',
        'foreignKey': 'roleId'
      }
    }
  }
};
