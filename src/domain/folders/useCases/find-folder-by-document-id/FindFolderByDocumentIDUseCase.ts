import { inject, injectable } from 'tsyringe';

import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { IRequestFindFolderByDocumentID } from '@domain/folders/request/IRequestFindFolderByDocumentID';
import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';

@injectable()
export class FindFolderByDocumentIDUseCase {
    constructor(
        @inject('FolderRepository')
        private folderRepository: IFolderRepository,
    ) { }

    async run({ document_id }: IRequestFindFolderByDocumentID): Promise<Folder[]> {
        const folders = await this.folderRepository.findByDocumentId(document_id);

        return folders;
    }
}
