import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { Document } from '@domain/documents/infra/typeorm/entities/Document';
import { User } from '@domain/users/infra/typeorm/entities/User';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('organizations')
export class Organization {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    user_id!: string;

    @ManyToOne(() => Document)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @OneToMany(() => Collaborator, collaborator => collaborator.organization, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    collaborator!: Collaborator[];

    @OneToMany(() => Document, document => document.organization, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    document!: Document[];

    @Column()
    title!: string;

    @Column()
    slug!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
