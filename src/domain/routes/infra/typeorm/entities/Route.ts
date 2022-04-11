import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { Document } from '@domain/documents/infra/typeorm/entities/Document';
import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import { ITypeRequestProps } from '@domain/routes/dtos/ITypeRequestProps';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('routes')
export class Route {
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
    url!: string;

    @Column({ type: 'enum', enum: ITypeRequestProps })
    type_request!: ITypeRequestProps;
}
