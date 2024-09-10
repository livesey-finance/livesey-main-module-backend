export const CurrencySchema = {
  'Table': {
    'tableName': 'Currency',
    'columns': {
      'currencyId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'currencyCode': {
        'type': 'varchar',
        'length': 3,
        'notNull': true,
        'unique': true
      },
      'name': {
        'type': 'varchar',
        'length': 255,
        'notNull': true
      },
      'symbol': {
        'type': 'varchar',
        'length': 10,
        'notNull': true
      },
      'exchangeRate': {
        'type': 'numeric',
        'notNull': true
      },
      'decimalPlaces': {
        'type': 'integer',
        'notNull': true
      },
      'lastUpdated': {
        'type': 'timestamp with time zone',
        'notNull': true
      }
    }
  }
};
