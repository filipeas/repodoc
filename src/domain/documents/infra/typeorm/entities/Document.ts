import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
export class Document {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @OneToMany(() => Organization, organization => organization.document, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    organization!: Organization[];

    @Column()
    title!: string;

    @Column()
    slug!: string;

    @Column()
    description!: string;

    @Column()
    status!: boolean;

    @Column()
    privacy!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
