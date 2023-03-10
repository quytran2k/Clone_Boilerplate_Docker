import { DataSource } from 'typeorm';
import environments from '../../constants/environments.constant';
import { EnvService } from './env.service';

const config = new EnvService().read();

export const dataSource = new DataSource({
  type: config.DB_TYPE,
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: process.env.NODE_ENV === environments.DEVELOPMENT,
  logging: false,
  entities: [process.cwd() + '/dist/entities/*{.js,.ts}'],
});
