export interface IRequestUpdateDocument {
    id: string;
    title: string;
    description?: string;
    status?: boolean;
    privacy?: boolean;
}
