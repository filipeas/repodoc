import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { hash } from 'bcrypt';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestCreateDocument } from '@domain/documents/request/IRequestCreateDocument';
import { IResponseCreateDocument } from '@domain/documents/response/IResponseCreateDocument';

@injectable()
export class CreateDocumentUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository
    ) { }

    async run({ title, description, status, privacy }: IRequestCreateDocument): Promise<IResponseCreateDocument> {
        const existentUser = await this.documentRepository.findByEmail(email);

        if (existentUser) {
            throw new BadRequestError('E-mail já cadastrado');
        }

        const passwordHash = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: passwordHash
        });

        return {
            name: user.name,
            email: user.email,
        };
    }
}
