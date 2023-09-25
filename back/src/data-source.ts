import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{js,ts}");

  const db: string | undefined = process.env.DATABASE_URL;

  if (!db) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: db,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
