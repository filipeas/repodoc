import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
export class Document {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    organization_id!: string;

    @ManyToOne(() => Organization)
    @JoinColumn({ name: 'organization_id' })
    organization!: Organization;

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
