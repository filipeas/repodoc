import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
export class Document {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    title!: string;

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
