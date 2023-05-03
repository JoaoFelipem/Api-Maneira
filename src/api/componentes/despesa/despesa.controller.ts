import {Request, Response} from 'express';
import {AppDataSource} from '../../../config/database/mysql-datasource.config';
import { Despesa } from './despesa.entity';

export class DespesaController{

public async list(request:Request, response:Response){
    const despesas = AppDataSource.manager.find(Despesa)
    response.status(200).json({dados:despesas});
}

}