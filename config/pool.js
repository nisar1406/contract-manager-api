import { Pool } from 'pg';
import { development } from './config.js';

const { username, password, database, host, port } = development;
/** Connection pool creation - START */
const dbHost = process.env.DB_HOST || host;
const dbUser = process.env.DB_USER || username;
const dbPassword = process.env.DB_PASSWORD || password;
const dbName = process.env.DB_NAME || database;
const dbPort = process.env.DB_PORT || port;

export const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  port: dbPort,
});
