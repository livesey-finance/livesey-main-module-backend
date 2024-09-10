import { MySQLClient, PostgresClient } from 'livesey-database';

import { dbType } from '../envConfig.js';

export const dbClient = dbType === 'mysql' ? new MySQLClient() : new PostgresClient();
