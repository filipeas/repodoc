import { Level } from '@domain/levels/infra/typeorm/entities/Level';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import { User } from '@domain/users/infra/typeorm/entities/User';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('collaborators')
export class Collaborator {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    user_id!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Column()
    organization_id!: string;

    @ManyToOne(() => Organization)
    @JoinColumn({ name: 'organization_id' })
    organization!: Organization;

    @Column()
    level_id!: string;

    @ManyToOne(() => Level)
    @JoinColumn({ name: 'level_id' })
    level!: Level;

    @CreateDateColumn()
    created_at!: Date;
}
