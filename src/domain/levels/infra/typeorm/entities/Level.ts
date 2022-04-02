import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('levels')
export class Level {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    title!: string;

    @Column()
    level!: number;
}
