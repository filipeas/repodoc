import { response, Router } from 'express';
import { authenticateRouter } from './authenticate.routes';
import { collaboratorsRouter } from './collaborators.routes';
import { documentsRouter } from './documents.routes';
import { foldersRouter } from './folders.routes';
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
routes.use('/organizations', organizationsRouter);
routes.use('/collaborators', collaboratorsRouter);
routes.use('/documents', documentsRouter);
routes.use('/levels', levelsRouter);
routes.use('/folders', foldersRouter);

export { routes };
