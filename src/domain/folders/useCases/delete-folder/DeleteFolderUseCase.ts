import { inject, injectable } from 'tsyringe';

import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { IRequestDeleteFolder } from '@domain/folders/request/IRequestDeleteFolder';
import { NotFoundError } from '@infra/http/errors/NotFoundError';

@injectable()
export class DeleteFolderUseCase {
    constructor(
        @inject('FolderRepository')
        private folderRepository: IFolderRepository,
    ) { }

    async run({ id }: IRequestDeleteFolder): Promise<void> {
        const folder = await this.folderRepository.findById(id);

        if (!folder) {
            throw new NotFoundError(
                'Pasta não encontrada',
            );
        }

        await this.folderRepository.delete(folder);
    }
}
