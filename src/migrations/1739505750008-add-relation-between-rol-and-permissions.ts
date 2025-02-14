import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationBetweenRolAndPermissions1739505750008 implements MigrationInterface {
    name = 'AddRelationBetweenRolAndPermissions1739505750008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rol_pemission" ("id" SERIAL NOT NULL, "rolId" integer, "permissionId" integer, CONSTRAINT "PK_fb5ae148052b7e5ec9a26c4015d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rol_pemission" ADD CONSTRAINT "FK_232db2d431baa82cd2669a42eeb" FOREIGN KEY ("rolId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rol_pemission" ADD CONSTRAINT "FK_c4d8fafbc58ddaaf3691a61ebf1" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rol_pemission" DROP CONSTRAINT "FK_c4d8fafbc58ddaaf3691a61ebf1"`);
        await queryRunner.query(`ALTER TABLE "rol_pemission" DROP CONSTRAINT "FK_232db2d431baa82cd2669a42eeb"`);
        await queryRunner.query(`DROP TABLE "rol_pemission"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
