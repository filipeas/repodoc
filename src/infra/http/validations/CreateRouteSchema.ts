import { boolean, object, string } from 'yup';

export const CreateRouteSchema = object({
    document_id: string().min(1).required(),
    folder_id: string().min(1).required(),
    title: string().min(1).required(),
    description: string().min(1).required(),
    url: string().min(1).required(),
    type_request: string().min(1).required(),
});
