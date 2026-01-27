import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { dirname, join } from 'path';

config();

const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [join('src/database/migrations')],
  synchronize: false,
});
