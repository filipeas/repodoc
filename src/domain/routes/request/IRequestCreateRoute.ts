import { ITypeRequestProps } from "../dtos/ITypeRequestProps";

export interface IRequestCreateRoute {
    document_id: string;
    folder_id: string;
    title: string;
    description: string;
    url: string;
    type_request: ITypeRequestProps;
}
