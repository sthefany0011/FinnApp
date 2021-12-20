document.addEventListener("DOMContentLoaded", function() {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn");   

   let formulario = document.querySelector(".form");
   
   let email = document.querySelector("#email");
   let msgEmail = document.querySelector("#msgEmail");
   let bordaEmail = document.querySelector(".bordaEmail");
   let validaEmail = false;

   /*
   let checkboxEntrada = document.querySelector("#gridRadios1");
   let checkboxSaida = document.querySelector("#gridRadios2");
   let msgCheckbox = document.querySelector("#msgCheckbox");
   let bordaCheckbox = document.querySelector(".checkbox");
   let validaCheckbox = false;
*/
   let msg = document.querySelector("#msg");
   
  
   email.addEventListener('keyup',() =>{
       if(!validarEmail(email)){
        msgEmail.innerHTML = "Preencha o campo corretamente";
        msgEmail.classList.add("msg-error");
        bordaEmail.classList.remove("bordaCorreto");
        bordaEmail.classList.add("bordaError"); 
        validaEmail = false;
       }
       else{  
        msgEmail.innerHTML ='';
        msgEmail.classList.remove("msg-error");  
        bordaEmail.classList.remove("bordaError");
        bordaEmail.classList.add("bordaCorreto");
        validaEmail = true;
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

   btn.addEventListener('click', function novoLancamento(){
      
    if(validaEmail){
        msg.innerHTML = "A redefinição de senha foi enviado para seu email.";
        msg.classList.remove("msgError"); 
        msg.classList.add("msgCorreto");
        
            
    }
    else{
        msg.innerHTML = "Preencha todos os campos corretamente.";
        msg.classList.remove("msgCorreto"); 
        msg.classList.add("msgError");
        setTimeout(function(){
            msg.classList.remove("msgError");
            msg.innerHTML = "";
            }, 1500);
        return;
    }
   
  

    let mandouComSucesso = true;

       if (mandouComSucesso) {
        setTimeout(function(){
            
            location.href = "login.html";
            msg.innerHTML = ""; 
            formulario.reset();
            bordaValor.classList.remove("bordaCorreto");
            bordaData.classList.remove("bordaCorreto");
            bordaTitulo.classList.remove("bordaCorreto");
            }, 1500);
            // reset as infos do formulario
       } else {
           // mostra msg dizendo que envio falhou
           msg.innerHTML = 'Error ao cadastrar Usuário'
           msg.classList.remove("msgCorreto"); 
           msg.classList.add("msgError");
       }   
    });

});
 

        
   
    


 