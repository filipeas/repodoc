import { inject, injectable } from 'tsyringe';

import { IBodyRepository } from '@domain/bodies/repositories/IBodyRepository';

import { IRequestCreateBody } from '@domain/bodies/request/IRequestCreateBody';
import { IResponseCreateBody } from '@domain/bodies/response/IResponseCreateBody';

@injectable()
export class CreateBodyUseCase {
    constructor(
        @inject('BodyRepository')
        private BodyRepository: IBodyRepository,
    ) { }

    async run({ }: IRequestCreateBody): Promise<IResponseCreateBody> {
        //
    }
}
