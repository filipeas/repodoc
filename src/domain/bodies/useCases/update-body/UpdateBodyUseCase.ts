import { inject, injectable } from 'tsyringe';

import { IBodyRepository } from '@domain/bodies/repositories/IBodyRepository';

import { IRequestUpdateBody } from '@domain/bodies/request/IRequestUpdateBody';
import { IResponseUpdateBody } from '@domain/bodies/response/IResponseUpdateBody';

@injectable()
export class UpdateBodyUseCase {
    constructor(
        @inject('BodyRepository')
        private BodyRepository: IBodyRepository,
    ) { }

    async run({ id }: IRequestUpdateBody): Promise<IResponseUpdateBody> {
        //
    }
}
