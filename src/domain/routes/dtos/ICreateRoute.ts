import { ITypeRequestProps } from "./ITypeRequestProps";

export interface ICreateRoute {
    document_id: string;
    folder_id: string;
    title: string;
    slug: string;
    description: string;
    url: string;
    type_request: ITypeRequestProps;
}
