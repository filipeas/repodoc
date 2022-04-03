import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateRoute1649025252184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'routes',
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
                        name: 'folder_id',
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
                        name: 'url',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'type_request',
                        type: 'enum',
                        enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
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
            'routes',
            new TableForeignKey({
                name: 'FKroutesdocument',
                referencedTableName: 'documents',
                referencedColumnNames: ['id'],
                columnNames: ['document_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'routes',
            new TableForeignKey({
                name: 'FKroutesfolder',
                referencedTableName: 'folders',
                referencedColumnNames: ['id'],
                columnNames: ['folder_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'routes',
            'FKroutesdocument',
        );
        await queryRunner.dropForeignKey(
            'routes',
            'FKroutesfolder',
        );
        await queryRunner.dropTable('routes');
    }

}
