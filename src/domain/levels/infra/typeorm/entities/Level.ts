import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('levels')
export class Level {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @OneToMany(() => Collaborator, colllaborator => colllaborator.level, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    collaborator!: Collaborator[];

    @Column()
    title!: string;

    @Column()
    level!: number;
}
