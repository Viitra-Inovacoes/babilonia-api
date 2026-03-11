import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { config } from 'dotenv';
import { join } from 'path';

config();

const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [join('src/database/migrations')],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  synchronize: false,
};

export const AppDataSource = new DataSource(dataSourceOptions);
