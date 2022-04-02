import { response, Router } from 'express';
import { authenticateRouter } from './authenticate.routes';
import { documentsRouter } from './documents.routes';
import { levelsRouter } from './levels.routes';
import { organizationsRouter } from './organizations.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
    return response
        .json({
            author: 'Filipe A.S',
            message:
                'Bem vindo a API do RepoDoc! Por favor, consulte nosso repositório para mais informações: https://github.com/filipeas/repodoc',
        })
        .send();
});

routes.use('/auth', authenticateRouter);
routes.use('/users', usersRouter);
routes.use('/documents', documentsRouter);
routes.use('/levels', levelsRouter);
routes.use('/organization', organizationsRouter);

export { routes };
