document.addEventListener("DOMContentLoaded", function() {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn"); 

   let formulario = document.querySelector(".form");

   let email = document.querySelector("#emailLogin");
   let msgEmail = document.querySelector("#msgEmailLogin");
   let labelEmail = document.querySelector("#labelEmailLogin");
   let validaEmailLogin = false;
   
   let senha = document.querySelector("#passwordLogin");
   let msgSenha = document.querySelector("#msgPasswordLogin");
   let labelSenha = document.querySelector("#labelPasswordLogin");
   let validaSenhaLogin = false;

   let msgLogin = document.querySelector("#msgLogin");
   
   email.addEventListener('keyup',() =>{
       if(!validarEmail(email)){
           msgEmail.innerHTML = 'Insira um email válido.';
           msgEmail.classList.add("msg-error");
           labelEmail.classList.add("label-error"); 
           validaEmailLogin = false;
       }
       else{
           msgEmail.innerHTML = '';
           msgEmail.classList.remove("msg-error");  
           labelEmail.classList.remove("label-error");
           labelEmail.classList.add("label-correto")
           validaEmailLogin = true;
       }
   });

   senha.addEventListener("keyup",() =>{
       if(senha.value.length < 4 || senha.value.length > 16 ){
           msgSenha.innerHTML = "Insira de 4 a 16 combinações de caracteres contendo letras, números, sinais de pontuação e símbolos (como ! e &).";
           msgSenha.classList.add("msg-error");
           labelSenha.classList.add("label-error"); 
           validaSenhaLogin = false;
       }
       else{
           msgSenha.innerHTML = '';
           msgSenha.classList.remove("msg-error");  
           labelSenha.classList.remove("label-error");
           labelSenha.classList.add("label-correto")
           validaSenhaLogin = true;
       }
    });

    function validarEmail(email) {
        let usuario = email.value.substring(0, email.value.indexOf("@"));
        let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 2)) {
            return true;    
        } 
    } 
             
    btn.addEventListener('click', function entrar(){
       
       if(validaEmailLogin && validaSenhaLogin){
            msgLogin.innerHTML = "Login realizado com sucesso!";
            msgLogin.classList.remove("msgError"); 
            msgLogin.classList.add("msgCorreto");  
            
       } else {
            msgLogin.innerHTML = "Preencha todos os campos corretamente.";
            msgLogin.classList.remove("msgCorreto"); 
            msgLogin.classList.add("msgError");
            setTimeout(function(){
                msgLogin.classList.remove("msgError"); 
                msgLogin.innerHTML = "";
                }, 1500);
            return;
       }
       
       // manda informacao para o servidor
      
       let mandouComSucesso = true;

       if (mandouComSucesso) {
        setTimeout(function(){
            
            location.href = "menu.html";
            formulario.reset();
            msg.classList.remove("msgCorreto"); 
            validaNome = false;
            validaEmail = false;
            validaSenha = false;
            labelNome.classList.remove("label-correto");
            labelEmail.classList.remove("label-correto");
            labelSenha.classList.remove("label-correto");
            }, 900);
            // reset as infos do formulario
       } else {
           // mostra msg dizendo que envio falhou
           msg.innerHTML = 'Error ao cadastrar Usuário'
           msg.classList.remove("msgCorreto"); 
           msg.classList.add("msgError");
       }   
   });

        
   
    
});

 
 

 
 