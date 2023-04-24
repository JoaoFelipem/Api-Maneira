import {Request, Response} from 'express';
import { isValidateObjectRequest } from './validar';
import { loadUsuarios, saveUsuarios } from './salvar';


export class usuarioController{
    
public list(request:Request, response:Response){
    const usuarios = loadUsuarios();
    response.status(200).json(usuarios);
}

//função que cria usuario e salva em arquivo
public create(request:Request, response:Response){
let ok = true;
let status =201;
let mensagem = "Usuário salvo com sucesso";

const inputs = [
{
    name: 'nome',
    message: 'a propriedade [nome] não pode estar vazia'
},
{
    name: 'email',
    message: 'a propriedade [email] não pode estar vazia'
},
{
    name: 'nomeUsuario',
    message: 'a propriedade [nome de usuario] não pode estar vazia'
}
];

//verificar se um valor está vazio
const checkvalidate = isValidateObjectRequest(request, inputs);
 if(Array.isArray(checkvalidate)){
    ok=false;
    status=400;
    mensagem = checkvalidate.join(',');
 }

 if(ok){
    saveUsuarios(request.body);
 }

response.status(status).json({
    sucesso:ok,
    message: mensagem
});
}

public update (request: Request, response: Response){
    response.status(200).json({mensagem:"Função update"});
}

public destroy (request: Request, response: Response){
    response.status(200).json({mensagem:"Função destroy"});
}

}

