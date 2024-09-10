export const HistorySchema = {
  'Table': {
    'tableName': 'History',
    'columns': {
      'changeId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'assetId': {
        'type': 'uuid',
        'notNull': true
      },
      'portfolioId': {
        'type': 'uuid',
        'notNull': true
      },
      'amount': {
        'type': 'numeric',
        'notNull': true
      },
      'priceAtTransaction': {
        'type': 'numeric',
        'notNull': true
      },
      'currencyCode': {
        'type': 'varchar',
        'length': 3,
        'notNull': true
      },
      'transactionType': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['Buy', 'Sell']
      },
      'status': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['Pending', 'Completed', 'Failed']
      },
      'transactionDate': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'ipAddress': {
        'type': 'varchar',
        'length': 45
      }
    },
    'relations': {
      'ManyToOne': [
        {
          'relatedEntity': 'Asset',
          'foreignKey': 'assetId'
        },
        {
          'relatedEntity': 'Portfolio',
          'foreignKey': 'portfolioId'
        }
      ]
    }
  }
};
