export interface IResponseCreateUser {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
