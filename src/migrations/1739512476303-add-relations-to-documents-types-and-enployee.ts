import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsToDocumentsTypesAndEnployee1739512476303 implements MigrationInterface {
    name = 'AddRelationsToDocumentsTypesAndEnployee1739512476303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employeee_document" ("id" SERIAL NOT NULL, "file_path" character varying NOT NULL, "is_active" character varying NOT NULL, "documentTypesId" integer, "employeeId" integer, CONSTRAINT "PK_83861d1c53aa7f8a27e4460bdba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employeee_document" ADD CONSTRAINT "FK_aacaa57f1d8de9c3fc35a1724ec" FOREIGN KEY ("documentTypesId") REFERENCES "document_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employeee_document" ADD CONSTRAINT "FK_002b1804b7b13fe91ceeefcb14e" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employeee_document" DROP CONSTRAINT "FK_002b1804b7b13fe91ceeefcb14e"`);
        await queryRunner.query(`ALTER TABLE "employeee_document" DROP CONSTRAINT "FK_aacaa57f1d8de9c3fc35a1724ec"`);
        await queryRunner.query(`DROP TABLE "employeee_document"`);
    }

}
