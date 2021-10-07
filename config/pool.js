import { Pool } from 'pg';
import dbConfig from './config.json';

export const pool = new Pool(dbConfig.development);
