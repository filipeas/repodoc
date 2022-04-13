import { inject, injectable } from 'tsyringe';

import { IBodyRepository } from '@domain/bodies/repositories/IBodyRepository';

@injectable()
export class AuthBodyUseCase {
    constructor(
        @inject('BodyRepository')
        private BodyRepository: IBodyRepository,
    ) { }

    async run({ id }): Promise<void> {
        //
    }
}
