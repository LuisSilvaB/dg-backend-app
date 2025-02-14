import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationBetweenUserAndEmproyee1739507424117 implements MigrationInterface {
    name = 'AddRelationBetweenUserAndEmproyee1739507424117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "userId"`);
    }

}
