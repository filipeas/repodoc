import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCollaborators1648985399457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'collaborators',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        generationStrategy: 'increment',
                        isGenerated: true,
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'organization_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'level_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'collaborators',
            new TableForeignKey({
                name: 'FKcollaboratoruser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'collaborators',
            new TableForeignKey({
                name: 'FKcollaboratororganization',
                referencedTableName: 'organizations',
                referencedColumnNames: ['id'],
                columnNames: ['organization_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'collaborators',
            new TableForeignKey({
                name: 'FKcollaboratorlevel',
                referencedTableName: 'levels',
                referencedColumnNames: ['id'],
                columnNames: ['level_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('collaborators', 'FKcollaboratoruser');
        await queryRunner.dropForeignKey('collaborators', 'FKcollaboratororganization');
        await queryRunner.dropForeignKey('collaborators', 'FKcollaboratorlevel');
        await queryRunner.dropTable('collaborators');
    }

}
