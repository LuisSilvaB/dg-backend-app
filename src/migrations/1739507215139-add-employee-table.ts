import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmployeeTable1739507215139 implements MigrationInterface {
    name = 'AddEmployeeTable1739507215139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "job_title" character varying NOT NULL, "salary" numeric NOT NULL, "document" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
