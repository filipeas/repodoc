import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFolder1648986874708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'folders',
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
                        name: 'document_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'slug',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
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
            'folders',
            new TableForeignKey({
                name: 'FKfoldersdocument',
                referencedTableName: 'documents',
                referencedColumnNames: ['id'],
                columnNames: ['document_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'folders',
            'FKfoldersdocument',
        );
        await queryRunner.dropTable('folders');
    }

}
