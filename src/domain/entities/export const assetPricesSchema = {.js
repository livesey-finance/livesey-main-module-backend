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
        'notNull': true,
        'foreignKey': {
          'table': 'Currency',
          'column': 'currencyCode'
        }
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
    },
    'relations': {
      'OneToMany': {
        'relatedEntity': 'Asset',
        'foreignKey': 'currencyCode'
      }
    }
  }
};

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
        'notNull': true,
        'foreignKey': {
          'table': 'Asset',
          'column': 'assetId'
        }
      },
      'portfolioId': {
        'type': 'uuid',
        'notNull': true,
        'foreignKey': {
          'table': 'Portfolio',
          'column': 'portfolioId'
        }
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
        'notNull': true,
        'foreignKey': {
          'table': 'Currency',
          'column': 'currencyCode'
        }
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
      'ManyToOne': {
        'relatedEntity': 'Asset',
        'foreignKey': 'assetId'
      },
      'ManyToOne': {
        'relatedEntity': 'Portfolio',
        'foreignKey': 'portfolioId'
      },
      'ManyToOne': {
        'relatedEntity': 'Currency',
        'foreignKey': 'currencyCode'
      }
    }
  }
};

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
        'notNull': true,
        'foreignKey': {
          'table': 'User',
          'column': 'userId'
        }
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
    },
    'relations': {
      'ManyToMany': {
        'relatedEntity': 'Role',
        'relationTable': 'RolePermissions',
        'foreignKey': 'permissionId'
      }
    }
  }
};

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
        'notNull': true,
        'foreignKey': {
          'table': 'User',
          'column': 'userId'
        }
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
      },
      'OneToMany': {
        'relatedEntity': 'History',
        'foreignKey': 'portfolioId'
      }
    }
  }
};

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
      },
      'OneToMany': {
        'relatedEntity': 'User',
        'foreignKey': 'roleId'
      }
    }
  }
};

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
        'notNull': true,
        'foreignKey': {
          'table': 'User',
          'column': 'userId'
        }
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
        'notNull': true,
        'foreignKey': {
          'table': 'Role',
          'column': 'roleId'
        }
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
      },
      'OneToMany': {
        'relatedEntity': 'Session',
        'foreignKey': 'userId'
      },
      'OneToMany': {
        'relatedEntity': 'Portfolio',
        'foreignKey': 'userId'
      }
    }
  }
};
