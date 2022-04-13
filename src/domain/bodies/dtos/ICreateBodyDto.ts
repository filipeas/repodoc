import { ITypeBodyProps } from "./ITypeBodyProps";

export interface ICreateBodyDto {
    title: string;
    slug: string;
    description: string;
    type: ITypeBodyProps;
    required: boolean;
}
