import { inject, injectable } from 'tsyringe';

import { IBodyRepository } from '@domain/bodies/repositories/IBodyRepository';

import { IRequestDeleteBody } from '@domain/bodies/request/IRequestDeleteBody';

@injectable()
export class DeleteBodyUseCase {
    constructor(
        @inject('BodyRepository')
        private BodyRepository: IBodyRepository,
    ) { }

    async run({ id }: IRequestDeleteBody): Promise<void> {
        //
    }
}
