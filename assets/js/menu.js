document.addEventListener("DOMContentLoaded", function() {
    // quando esta função correr o DOM está acessível

   btnNovoLançamento.addEventListener('click', function novoLancamento(){
      
        let btnNovoLançamento = document.querySelector("#btnNovoLançamento");
        btnNovoLançamento.click();
                location.href = "launch.html";
    });     
});