export interface IResponseAuthUser {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
