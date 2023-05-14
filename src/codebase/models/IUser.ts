export interface IUser {
    login: string;
    name: string;
    id: number;
    role: 'admin' | 'user';
}