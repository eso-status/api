import 'reflect-metadata';
import { runSeeders } from 'typeorm-extension';
import { dataSource } from '../data-source';

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await dataSource.runMigrations();
  await runSeeders(dataSource);
  process.exit();
});
