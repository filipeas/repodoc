import { Document } from '@domain/documents/infra/typeorm/entities/Document';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('folders')
export class Folder {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    document_id!: string;

    @ManyToOne(() => Document)
    @JoinColumn({ name: 'document_id' })
    document!: Document;

    @Column()
    title!: string;

    @Column()
    slug!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
