import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDocumentTypeTable1739507606530 implements MigrationInterface {
    name = 'CreateDocumentTypeTable1739507606530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "document_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d467d7eeb7c8ce216e90e8494aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "document_types"`);
    }

}
