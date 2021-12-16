document.addEventListener("DOMContentLoaded", function(e) {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn");
   

   let nome = document.querySelector("#name");
   let msgNome = document.querySelector("#msgName");
   let validaNome = false;

   let email = document.querySelector("#email");
   let msgEmail = document.querySelector("#msgEmail");
   let validaEmail = false;
   
   let senha = document.querySelector("#password");
   let msgSenha = document.querySelector("#msgPassword");
   let validaSenha = false;

   let msgError = document.querySelector("#msgError");
   let msgSuccess = document.querySelector("#msgSuccess");
   
  
   nome.addEventListener('keyup',() =>{
       if(nome.value.length <= 4){
           msgNome.setAttribute('style','color: red');
           msgNome.innerHTML = 'Insira no mínimo 5 caracteres';
           validaNome = false;
       }
       else{
            msgNome.setAttribute('style','color: green');
            msgNome.innerHTML = 'Campo preenchido corretamente';          
           validaNome = true;
       }
   });

   email.addEventListener('keyup',() =>{
       if(email.value <= 4){
           msgEmail.setAttribute('style', 'color: red');
           msgEmail.innerHTML = 'Insira no mínimo 5 caracteres';
           validaEmail = false;
       }
       else{
           msgEmail.setAttribute('style','color: green');
           msgEmail.innerHTML = 'Campo preenchido corretamente';
           validaEmail = true;
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
       if(validaNome && validaEmail && validaSenha){
            msgSuccess.setAttribute('style', 'display: block');
            msgSuccess.innerHTML = 'Cadastrado com sucesso!';
            msgError.setAttribute('style', 'display: none');
            msgError.innerHTML = '';
       } else {
            msgError.setAttribute('style', 'display: block');
            msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar';
            msgSuccess.innerHTML = '';
            msgSuccess.setAttribute('style', 'display: none');
            
            setTimeout(()=>{
                window.location.href = 'file:///C:/Users/Mariana/Documents/Cursos/Neon/desafioNeon/ProjetoNeon/launch.html'
            }, 3000)
       }
       
   })
});

 