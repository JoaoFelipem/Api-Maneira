import {Request, Response} from 'express';

export class BaseController{

public index(request:Request, response:Response){
    response.status(200).json({message:'Api está rodando mano...'});
}

public info(request: Request, response: Response){
    response.status(200).json({
        nome: 'API REST - SheepRate',
        mode: 'desenvolvimento',
        version:'1.7.10',
    });
}


}