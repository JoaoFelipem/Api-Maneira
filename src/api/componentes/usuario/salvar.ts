import fs from 'fs';
const ARQUIVO = `${__dirname}/../usuario/storage/usuarios.json`;
let id =0;
let usuarios = Array();



function loadUsuarios(){
    if (!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));
    const data = fs.readFileSync(ARQUIVO);
    usuarios = JSON.parse(data.toString());
    return usuarios; 
}

function saveUsuarios(data: any){
    id++;
    usuarios.push({id:usuarios.length+1,
    ...data,situação:"ativo"});
    fs.writeFileSync(ARQUIVO, JSON.stringify(usuarios));
}

export {loadUsuarios, saveUsuarios};