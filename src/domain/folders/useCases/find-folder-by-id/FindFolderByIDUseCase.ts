import { inject, injectable } from 'tsyringe';

import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { IRequestFindFolderByDocumentID } from '@domain/folders/request/IRequestFindFolderByDocumentID';
import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';
import { IRequestFindFolderByID } from '@domain/folders/request/IRequestFindFolderByID';
import { NotFoundError } from '@infra/http/errors/NotFoundError';

@injectable()
export class FindFolderByIDUseCase {
    constructor(
        @inject('FolderRepository')
        private folderRepository: IFolderRepository,
    ) { }

    async run({ id }: IRequestFindFolderByID): Promise<Folder> {
        const folder = await this.folderRepository.findById(id);

        if (!folder) {
            throw new NotFoundError(
                'Pasta não encontrada',
            );
        }

        return folder;
    }
}
