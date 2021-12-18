document.addEventListener("DOMContentLoaded", function() {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn");   

   let formulario = document.querySelector(".form");
   
   let nome = document.querySelector("#name");
   let msgNome = document.querySelector("#msgName");
   let labelNome = document.querySelector("#labelNome");
   let validaNome = false;

   let email = document.querySelector("#email");
   let msgEmail = document.querySelector("#msgEmail");
   let labelEmail = document.querySelector("#labelEmail");
   let validaEmail = false;
   
   let senha = document.querySelector("#password");
   let msgSenha = document.querySelector("#msgPassword");
   let labelSenha = document.querySelector("#labelPassword");
   let validaSenha = false;

   let msg = document.querySelector("#msg");
   
  
   nome.addEventListener('keyup',() =>{
       if(nome.value.length < 3 && nome.value != /\d/g,"" ){
           msgNome.innerHTML = "Insira de 4 a 16 caracteres contendo apenas letras.";
           msgNome.classList.add("msg-error");
           labelNome.classList.add("label-error"); 
           validaNome = false;
       }
       else{  
           msgNome.classList.remove("msg-error");  
           labelNome.classList.remove("label-error");
           labelNome.classList.add("label-correto");
           validaNome = true;
       }
   });

   email.addEventListener('keyup',() =>{
       if(!validarEmail(email)){
           msgEmail.innerHTML = 'Insira um email válido.';
           msgEmail.classList.add("msg-error");
           labelEmail.classList.add("label-error"); 
           validaEmail = false;
       }
       else{
           msgEmail.classList.remove("msg-error");  
           labelEmail.classList.remove("label-error");
           labelEmail.classList.add("label-correto")
           validaEmail = true;
       }
   });

   senha.addEventListener("keyup",() =>{
       if(senha.value.length < 4 || senha.value.length > 16 ){
           msgSenha.innerHTML = "Insira de 4 a 16 combinações de caracteres contendo letras, números, sinais de pontuação e símbolos (como ! e &).";
           msgSenha.classList.add("msg-error");
           labelSenha.classList.add("label-error"); 
           validaSenha = false;
       }
       else{
           msgSenha.classList.remove("msg-error");  
           labelSenha.classList.remove("label-error");
           labelSenha.classList.add("label-correto")
           validaSenha = true;
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
             
   btn.addEventListener('click', function cadastrar(e){
       
       if(validaNome && validaEmail && validaSenha){
            msg.innerHTML = "Cadastro realizado com sucesso!";
            msg.classList.remove("msgError"); 
            msg.classList.add("msgCorreto");  
                
            
       } else {
            msg.innerHTML = "Preencha todos os campos corretamente.";
            msg.classList.remove("msgCorreto"); 
            msg.classList.add("msgError");
            setTimeout(function(){
                msg.classList.remove("msgError"); 
                }, 1500);
            return;
       }
       
       // manda informacao para o servidor
      
       let mandouComSucesso = true;

       if (mandouComSucesso) {
        setTimeout(function(){
            let signinbtn = document.querySelector("#signin");
            signinbtn.click();
            
            formulario.reset();
            msg.classList.remove("msgCorreto"); 
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

 