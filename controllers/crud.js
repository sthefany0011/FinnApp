//chamada a banco de dados
const conexion = require('../b_dados/db');
//salvar Cadastro
exports.save_user = (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

     conexion.query('INSERT INTO user SET ?',{nome:nome, email:email, senha:senha}, (error)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/login');         
        }
}); 
}; 

//salvar lancamentos
exports.dados = (req, res)=>{
    const valor = req.body.valor;
    const data = req.body.data;
    const descricao = req.body.descricao;
    const tipo = req.body.tipo;


     conexion.query('INSERT INTO lancamentos SET ?',{valor:valor, data:data, descricao:descricao, tipo:tipo}, (error)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/menu');         
        }
}); 
};

