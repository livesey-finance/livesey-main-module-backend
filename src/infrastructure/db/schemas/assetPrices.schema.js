export const assetPricesSchema = {
  'Table': {
    'tableName': 'Asset',
    'columns': {
      'assetId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'assetType': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['Shares', 'Crypto']
      },
      'name': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'currentPrice': {
        'type': 'numeric',
        'notNull': true
      },
      'currencyCode': {
        'type': 'varchar',
        'length': 3,
        'notNull': true
      }
    },
    'relations': {
      'ManyToOne': {
        'relatedEntity': 'Currency',
        'foreignKey': 'currencyCode'
      }
    }
  }
};
