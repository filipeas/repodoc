import { getRepository, Repository } from 'typeorm';

import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { ICreateFolderDto } from '@domain/folders/dtos/ICreateFolderDto';
import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';

export class TypeOrmFolderRepository implements IFolderRepository {
    private repository: Repository<Folder>;

    constructor() {
        this.repository = getRepository(Folder);
    }

    async create(data: ICreateFolderDto): Promise<Folder> {
        const folder = this.repository.create(data);
        await this.repository.save(folder);
        return folder;
    }

    async findById(id: string, relations = []): Promise<Folder | undefined> {
        return await this.repository.findOne(id, { relations });
    }

    async findBySlug(slug: string, relations = []): Promise<Folder | undefined> {
        return await this.repository.findOne(slug, { relations });
    }

    async findByDocumentId(document_id: string, relations = []): Promise<Folder[]> {
        return await this.repository.find({
            where: { document_id: document_id }, relations
        });
    }

    async findByIdAndSlug(id: string, slug: string): Promise<Folder | undefined> {
        return await this.repository.findOne({ id: id, slug: slug });
    }

    async save(folder: Folder): Promise<Folder> {
        return await this.repository.save(folder);
    }

    async delete(folder: Folder): Promise<void> {
        const findfolder = await this.repository.findOne(folder.id, {
            relations: [],
        });

        if (!findfolder) {
            throw new Error('Error');
        }

        await this.repository.delete(findfolder);
    }
}
