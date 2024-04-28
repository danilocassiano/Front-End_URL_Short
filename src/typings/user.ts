export interface IUser {
    name: string;
    email: string;
    password: string;
    username: string;
    status: boolean;
    pro: boolean;
}

export type IUserCreate = Omit<IUser, 'status' | 'pro'>; 

export interface IUserLogin {
    username: string;
    password: string;
}

export interface IUserLoginResponse {
    email: string;
    name: string;
    token: string;
}

export type IUserUpdate = Omit<Partial<IUser>, 'status' | 'pro'> 