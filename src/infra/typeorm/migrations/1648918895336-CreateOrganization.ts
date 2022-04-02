import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class CreateOrganization1648918895336 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'organizations',
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
                        name: 'document_id',
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
            'organizations',
            new TableForeignKey({
                name: 'FKorganizationuser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'organizations',
            new TableForeignKey({
                name: 'FKorganizationdocument',
                referencedTableName: 'documents',
                referencedColumnNames: ['id'],
                columnNames: ['document_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'organizations',
            new TableForeignKey({
                name: 'FKorganizationlevel',
                referencedTableName: 'levels',
                referencedColumnNames: ['id'],
                columnNames: ['level_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('organizations', 'FKorganizationuser');
        await queryRunner.dropForeignKey(
            'organizations',
            'FKorganizationdocument',
        );
        await queryRunner.dropForeignKey(
            'organizations',
            'FKorganizationlevel',
        );
        await queryRunner.dropTable('organizations');
    }
}
