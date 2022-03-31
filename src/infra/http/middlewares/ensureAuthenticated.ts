import { TypeOrmUserRepository } from '@domain/users/infra/typeorm/repositories/TypeOrmUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { UnauthozitedError } from '@infra/http/errors/UnauthorizedError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new UnauthozitedError('Falha na autenticação');
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: id } = verify(token, String(process.env.KEY_AUTH)) as IPayload;

        const usersRepository = new TypeOrmUserRepository();
        const user = usersRepository.findById(id);

        if (!user) {
            throw new BadRequestError('Usuário não encontrado');
        }

        next();
    } catch (error) {
        throw new UnauthozitedError('Token inválido');
    }
}
