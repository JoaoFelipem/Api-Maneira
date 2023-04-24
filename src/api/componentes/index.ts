import {Router} from 'express';
import { BaseRoutes} from './base/base.routes';
import { UsuarioRoutes } from './usuario/usuario.routes';

export function registerRoutes (router:Router, prefixo:string =''):void {
    router.use(`${prefixo}`, new BaseRoutes().routes());
    router.use(`${prefixo}`, new UsuarioRoutes().routes());
}

