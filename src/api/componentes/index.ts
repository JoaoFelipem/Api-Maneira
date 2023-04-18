import {Router} from 'express';
import { BaseRoutes} from './base/base.routes';

export function registerRoutes (router:Router, prefixo:string =''):void {
    router.use(`${prefixo}`, new BaseRoutes().routes());
}

