import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeds.module';
import { AdminUserSeeder } from './UserSeeder';
import { RolePermissionSeeder } from './PermissionRoleSeeder';
import { PermissionSeeder } from './PermissionSeeder';
import { RoleSeeder } from './RoleSeeder';

async function runSeeders() {
  const app = await NestFactory.createApplicationContext(SeederModule);
  const permissionSeeder = app.get(PermissionSeeder);
  const roleSeeder = app.get(RoleSeeder);
  const adminUserSeeder = app.get(AdminUserSeeder);
  const rolePermissionSeeder = app.get(RolePermissionSeeder);

  await permissionSeeder.run();
  await roleSeeder.run();
  await rolePermissionSeeder.run();
  await adminUserSeeder.run();

  await app.close();
}

runSeeders().catch((error) => {
  console.error('Error running seeders:', error);
  process.exit(1);
});
