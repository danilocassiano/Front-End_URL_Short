import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ILink, ILinkCreate, ILinkUpdate } from "../../typings/link";
import { IPage } from "../../typings/paginate";
import { IUser, IUserCreate, IUserLogin, IUserLoginResponse } from "../../typings/user";

type IResponse<T> = {
    data: T,
    status: number,
    error?: AxiosError
}

export class BackendService {
    private http: AxiosInstance;
    
    constructor(){
        this.http = axios.create({
            baseURL: process.env.API_URL,
        });
    }

    async healthCheck(){
        return this.http.get('/')
            .then(this.getData<{version: string}>);
    }

    private getData<T>(res: AxiosResponse): IResponse<T> {
        return {
            data: res.data,
            status: res.status
        }
    }

    private getError(err: AxiosError): IResponse<any> {
        return {
            error: err,
            status: err.response?.status || 400,
            data: err.response?.data
        }
    }

    async login(user: IUserLogin): Promise<IUserLoginResponse> {
        return this.http.post('/users/signin', user)
            .then( ({ data })=> data );
    }

    async register(user: IUserCreate): Promise<IResponse<IUser | any>>{
        return this.http.post('/users/signup', user)
            .then(this.getData<IUser>)
            .catch(this.getError);
    }

    async createLink(link: ILinkCreate){
        return this.http.post('/links', link);
    }

    async updateLink(link: ILinkUpdate): Promise<Partial<ILink>> {
        return this.http.patch('/links', link);
    }

    paginateLinks(page: IPage){

    }

}