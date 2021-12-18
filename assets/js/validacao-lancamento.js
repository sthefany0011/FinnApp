document.addEventListener("DOMContentLoaded", function(e) {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn");
   

   let valor = document.querySelector("#valor");
   let msgValor = document.querySelector("#msgValor");
   let validaValor = false;

   let descricao = document.querySelector("#descricao");
   let msgDescricao = document.querySelector("#msgDescricao");
   let validaDescricao = false;
   
   /*let senha = document.querySelector("#password");
   let msgSenha = document.querySelector("#msgPassword");
   let validaSenha = false;*/

   let msgError = document.querySelector("#msgError");
   let msgSuccess = document.querySelector("#msgSuccess");
   
  
   nome.addEventListener('keyup',() =>{
       if(valor.value <= 12 && valor.value.typeOf (valor.value) == 'number'){
        
           msgValor.setAttribute('style','color: red');
           msgValor.innerHTML = 'Insira no mínimo 5 caracteres';
           validaValor = false;
       }
       else{
            msgValor.setAttribute('style','color: green');
            msgValor.innerHTML = 'Campo preenchido corretamente';          
           validaValor = true;
       }
   });

   email.addEventListener('keyup',() =>{
       if(descricao.value <= 50){
           msgDescricao.setAttribute('style', 'color: red');
           msgDescricao.innerHTML = 'Insira no mínimo 5 caracteres';
           validaDescricao = false;
       }
       else{
           msgDescricao.setAttribute('style','color: green');
           msgDescricao.innerHTML = 'Campo preenchido corretamente';
           validaDescricao = true;
       }
   });

   senha.addEventListener('keyup',() =>{
        if(senha.value.length <= 5){
            msgSenha.setAttribute('style', 'color: red')
            msgSenha.innerHTML = 'Insira no mínimo 6 caracteres';
            validaSenha = false;
        }
        else{
            msgSenha.setAttribute('style','color: green');
            msgSenha.innerHTML = 'Campo preenchido corretamente';
            validaSenha = true;
        }
    });

   btn.addEventListener('click', function cadastrar(e){
       e.preventDefault();
       if(validaValor && validaDescricao && validaData){
            msgSuccess.setAttribute('style', 'display: block');
            msgSuccess.innerHTML = 'Cadastrado com sucesso!';
            msgError.setAttribute('style', 'display: none');
            msgError.innerHTML = '';
       } else {
            msgError.setAttribute('style', 'display: block');
            msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar';
            msgSuccess.innerHTML = '';
            msgSuccess.setAttribute('style', 'display: none');         
       }
       
   })
});