import { boolean, object, string } from 'yup';

export const UpdateFolderSchema = object({
    title: string().min(1).required(),
    description: string().min(1).required(),
});
