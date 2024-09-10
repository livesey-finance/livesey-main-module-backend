export const TransactionSchema = {
  'Table': {
    'tableName': 'Transaction',
    'columns': {
      'transactionId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'portfolioId': {
        'type': 'uuid',
        'notNull': true
      },
      'currencyId': {
        'type': 'uuid',
        'notNull': true
      },
      'amount': {
        'type': 'numeric',
        'notNull': true
      },
      'transactionType': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['Buy', 'Sell']
      },
      'timestamp': {
        'type': 'timestamp with time zone',
        'notNull': true
      },
      'status': {
        'type': 'varchar',
        'length': 10,
        'notNull': true,
        'enum': ['Success', 'Failed']
      }
    },
    'relations': {
      'ManyToOne': [
        {
          'relatedEntity': 'Portfolio',
          'foreignKey': 'portfolioId'
        },
        {
          'relatedEntity': 'Currency',
          'foreignKey': 'currencyId'
        }
      ]
    }
  }
};
