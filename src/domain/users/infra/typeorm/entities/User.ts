import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @OneToMany(() => Collaborator, collaborator => collaborator.user, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    collaborator!: Collaborator[];

    @OneToMany(() => Organization, organization => organization.user, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    organization!: Organization[];

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
