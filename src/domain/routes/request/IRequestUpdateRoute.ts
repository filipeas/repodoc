import { ITypeRequestProps } from "../dtos/ITypeRequestProps";

export interface IRequestUpdateRoute {
    id: string;
    document_id: string;
    folder_id: string;
    title: string;
    description: string;
    url: string;
    type_request: ITypeRequestProps;
}
