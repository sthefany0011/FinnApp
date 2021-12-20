document.addEventListener("DOMContentLoaded", function() {
    // quando esta função correr o DOM está acessível
   let btn = document.querySelector("#btn");   

   let formulario = document.querySelector(".form");
   
   let valor = document.querySelector("#valor");
   let msgValor = document.querySelector("#msgValor");
   let bordaValor = document.querySelector(".value");
   let validaValor = false;

   let data = document.querySelector("#data");
   let msgData = document.querySelector("#msgData");
   let bordaData = document.querySelector(".date");
   let validaData = false;
   
   let titulo = document.querySelector("#inputTitulo");
   let msgTitulo = document.querySelector("#msgTitulo");
   let bordaTitulo = document.querySelector(".titulo");
   let validaTitulo = false;

   /*
   let checkboxEntrada = document.querySelector("#gridRadios1");
   let checkboxSaida = document.querySelector("#gridRadios2");
   let msgCheckbox = document.querySelector("#msgCheckbox");
   let bordaCheckbox = document.querySelector(".checkbox");
   let validaCheckbox = false;
*/
   let msg = document.querySelector("#msg");
   
  
   valor.addEventListener('keyup',() =>{
       if(valor.value.length < 3){
            msgValor.innerHTML = "Preencha o campo corretamente";
            msgValor.classList.add("msg-error");
            bordaValor.classList.remove("bordaCorreto");
            bordaValor.classList.add("bordaError"); 
            validaValor = false;
       }
       else{  
            msgValor.innerHTML ='';
            msgValor.classList.remove("msg-error");  
            bordaValor.classList.remove("bordaError");
            bordaValor.classList.add("bordaCorreto");
            validaValor = true;
       }
   });

   data.addEventListener('keyup',() =>{
    if(data.value.length <= 9 ||data.value.length >= 11 ){
            msgData.innerHTML = "Preencha o campo corretamente";
            msgData.classList.add("msg-error");
            bordaData.classList.remove("bordaCorreto");
            bordaData.classList.add("bordaError"); 
            validaData = false;
    }
    else{  
            msgData.innerHTML ='';
            msgData.classList.remove("msg-error");  
            bordaData.classList.remove("bordaError");
            bordaData.classList.add("bordaCorreto");
            validaData = true;
    }
    });

    titulo.addEventListener('keyup',() =>{
        if(titulo.value == '' || titulo.value.length > 50 ){
            msgTitulo.innerHTML = "Preencha o campo corretamente";
            msgTitulo.classList.add("msg-error");
            bordaTitulo.classList.remove("bordaCorreto");
            bordaTitulo.classList.add("bordaError"); 
            validaTitulo = false;
        }
        else{  
            msgTitulo.innerHTML ='';
            msgTitulo.classList.remove("msg-error");  
            bordaTitulo.classList.remove("bordaError");
            bordaTitulo.classList.add("bordaCorreto");
            validaTitulo = true;
        }
    });
/*
    checkbox.addEventListener('keyup',() =>{
        if(checkbox.value == '' || checkbox.value.length > 50 ){
            msgCheckbox.innerHTML = "Preencha o campo corretamente";
            msgCheckbox.classList.add("msg-error");
            bordaCheckbox.classList.remove("bordaCorreto");
            bordaCheckbox.classList.add("bordaError"); 
            validaCheckbox = false;
        }
        else{  
            msgCheckbox.innerHTML ='';
            msgCheckbox.classList.remove("msg-error");  
            bordaCheckbox.classList.remove("bordaError");
            bordaCheckbox.classList.add("bordaCorreto");
            validaCheckbox = true;
        }
    });
   
      */
   btn.addEventListener('click', function novoLancamento(){
      
    if(validaValor && validaData && validaTitulo){
        msg.innerHTML = "Cadastro realizado com sucesso!";
        msg.classList.remove("msgError"); 
        msg.classList.add("msgCorreto");  
            
    }
    else{
        msg.innerHTML = "Preencha todos os campos corretamente.";
        msg.classList.remove("msgCorreto"); 
        msg.classList.add("msgError");
        setTimeout(function(){
            msg.classList.remove("msgError"); 
            }, 1500);
        return;
    }
   
  

    let mandouComSucesso = true;

       if (mandouComSucesso) {
        setTimeout(function(){
            let btn = document.querySelector("#btn");
            btn.click();
            location.href = "menu.html";
            msg.classList.remove("msgCorreto"); 
            formulario.reset();
            bordaValor.classList.remove("bordaCorreto");
            bordaData.classList.remove("bordaCorreto");
            bordaTitulo.classList.remove("bordaCorreto");
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
 