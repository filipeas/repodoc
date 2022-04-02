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

    @OneToMany(() => Organization, organization => organization.level, {
        onDelete: 'CASCADE',
        cascade: true,
    })
    organization!: Organization[];

    @Column()
    title!: string;

    @Column()
    level!: number;
}
