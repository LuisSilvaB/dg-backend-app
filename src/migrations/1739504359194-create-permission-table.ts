import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePermissionTable1739504359194 implements MigrationInterface {
    name = 'CreatePermissionTable1739504359194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "permission"`);
    }

}
