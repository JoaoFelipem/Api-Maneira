import { Request, Response, Router} from 'express';
import { registerRoutes } from './componentes';

export function initRoutes(router:Router):void{
    const prefixo:string = '/apiSpR/1.7.10';

    registerRoutes(router, prefixo);
}