import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedsLevel1648857177618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO levels (title, level) values('Administrador', 1)`);
        await queryRunner.query(`INSERT INTO levels (title, level) values('Editor', 2)`);
        await queryRunner.query(`INSERT INTO levels (title, level) values('Leitor', 3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable('levels');
    }

}
