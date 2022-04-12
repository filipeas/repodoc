import { ITypeBodyProps } from '@domain/bodies/dtos/ITypeBodyProps';
import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('bodies')
export class Body {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    document_id!: string;

    @ManyToOne(() => Document)
    @JoinColumn({ name: 'document_id' })
    document!: Document;

    @Column()
    folder_id!: string;

    @ManyToOne(() => Folder)
    @JoinColumn({ name: 'folder_id' })
    folder!: Folder;

    @Column()
    title!: string;

    @Column()
    slug!: string;

    @Column()
    description!: string;

    @Column()
    type!: ITypeBodyProps;

    @Column()
    required!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
