import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { generateSlug } from '@infra/utils/generateSlug';
import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { IResponseCreateFolder } from '@domain/folders/response/IResponseCreateFolder';
import { IRequestUpdateFolder } from '@domain/folders/request/IRequestUpdateFolder';
import { NotFoundError } from '@infra/http/errors/NotFoundError';

@injectable()
export class UpdateFolderUseCase {
    constructor(
        @inject('FolderRepository')
        private folderRepository: IFolderRepository,
    ) { }

    async run({ id, title, description }: IRequestUpdateFolder): Promise<IResponseCreateFolder> {
        const slug = generateSlug(title);
        const folder = await this.folderRepository.findById(id);

        if (!folder) {
            throw new BadRequestError(
                'Pasta com nome já cadastrado',
            );
        }

        Object.assign(folder, {
            slug,
            title,
            description,
        });

        await this.folderRepository.save(folder);

        return {
            id: folder.title,
            title: folder.title,
            slug: folder.slug,
            description: folder.description
        };
    }
}
