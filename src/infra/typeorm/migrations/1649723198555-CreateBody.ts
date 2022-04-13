
        import { MigrationInterface, QueryRunner, Table } from "typeorm";

        export class CreateBody1649723198555 implements MigrationInterface {

            public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
                    new Table({
                        name: 'bodies',
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
                            {
                                name: 'deleted_at',
                                type: 'timestamp',
                                isNullable: true,
                            },
                        ],
                    }),
                );
            }

            public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropTable('bodies');
            }

        }
