import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { generateSlug } from '@infra/utils/generateSlug';
import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { IRequestCreateFolder } from '@domain/folders/request/IRequestCreateFolder';
import { IResponseCreateFolder } from '@domain/folders/response/IResponseCreateFolder';

@injectable()
export class CreateFolderUseCase {
    constructor(
        @inject('FolderRepository')
        private folderRepository: IFolderRepository,
    ) { }

    async run({ title, description }: IRequestCreateFolder): Promise<IResponseCreateFolder> {
        const slug = generateSlug(title);
        const existentFolder = await this.folderRepository.findBySlug(slug);

        if (existentFolder) {
            throw new BadRequestError(
                'Pasta com nome já cadastrado',
            );
        }

        const folder = await this.folderRepository.create({
            slug,
            title,
            description,
        });

        return {
            id: folder.title,
            title: folder.title,
            slug: folder.slug,
            description: folder.description
        };
    }
}
