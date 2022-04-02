import { Document } from '@domain/documents/infra/typeorm/entities/Document';
import { Level } from '@domain/levels/infra/typeorm/entities/Level';
import { User } from '@domain/users/infra/typeorm/entities/User';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('organizations')
export class Organization {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    user_id!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Column()
    document_id!: string;

    @ManyToOne(() => Document)
    @JoinColumn({ name: 'document_id' })
    document!: Document;

    @Column()
    level_id!: string;

    @ManyToOne(() => Level)
    @JoinColumn({ name: 'level_id' })
    level!: Level;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
