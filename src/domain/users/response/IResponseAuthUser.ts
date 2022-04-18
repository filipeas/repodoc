export interface IResponseAuthUser {
    user: {
        id: string;
        name: string;
        email: string;
    };
    token: string;
}
