import { AnySchema } from 'yup';
import { NextFunction, Request, Response } from 'express';

const validate =
    (schema: AnySchema) =>
        async (request: Request, response: Response, next: NextFunction) => {
            try {
                await schema.validate(request.body);
                return next();
            } catch (error) {
                return response.status(400).send(error);
            }
        };

export default validate;
