import { MySQLClient, PostgresClient } from 'livesey-database';

import { dbType } from '../envConfig.js';

const dbClient = dbType === 'mysql' ? new MySQLClient() : new PostgresClient();

console.log(dbType);
