import {Router } from 'express';
import { DespesaController} from './despesa.controller';

export class DespesaRoutes{

    private router: Router = Router();

    private readonly controller: DespesaController;

    constructor(){
        this.controller = new DespesaController();
        this.init();
    }

    private init():void{
        this.router.get('/despesa',this.controller.list);
    }

    public routes(): Router {
        return this.router;
    }
}