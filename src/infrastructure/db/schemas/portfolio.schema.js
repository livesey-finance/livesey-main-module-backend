export const PortfolioSchema = {
  'Table': {
    'tableName': 'Portfolio',
    'columns': {
      'portfolioId': {
        'type': 'uuid',
        'primaryKey': true,
        'unique': true,
        'notNull': true
      },
      'userId': {
        'type': 'uuid',
        'notNull': true
      },
      'name': {
        'type': 'varchar',
        'length': 255,
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
      'totalValue': {
        'type': 'numeric',
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
