import { MigrationInterface, QueryRunner } from "typeorm";

export class addNewAttributeToUser1739600372731 implements MigrationInterface {
    name = 'addNewAttributeToUser1739600372731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "default_route" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "default_route"`);
    }

}
