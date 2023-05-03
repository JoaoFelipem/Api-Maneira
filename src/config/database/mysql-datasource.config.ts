import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
    database: 'api_maneira_db',
    synchronize: false,
    logging: false,
    entities: ['src/api/components/**/*.entity{.ts,.js}'],
    migrations: [],
    subscribers: []
});