import {Router } from 'express';
import { usuarioController } from './usuario.controller';

export class UsuarioRoutes{
    private router: Router = Router();
    private readonly controller: usuarioController;

    constructor(){
        this.controller = new usuarioController();
        this.init();
    }

    public init():void{
        this.router.post('/usuarios',this.controller.create);
        this.router.get('/usuarios',this.controller.list);
        this.router.put('/usuarios/:id',this.controller.update);
        this.router.delete('/usuarios/:id',this.controller.destroy);
    }

    public routes(): Router{
        return this.router;
    }
}

