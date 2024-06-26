function testarlogin(){
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    let erro = document.getElementById("erro");

    if(usuario.value === ""){
        erro.innerHTML = "Campo usuário não preenchido.";
        usuario.classList.add("erro");
        
    }
    else if(senha.value === ""){
        erro.innerHTML = "Campo senha não preenchido.";
        usuario.classList.remove("erro");
        senha.classList.add("erro");
    }
    else if(senha.value !== "admin" || usuario.value !== "admin"){
        erro.innerHTML = "Usuário ou senha inválidos.";
        usuario.classList.remove("erro");
        senha.classList.remove("erro");
    }
    else{
        window.location.assign("agenda.html");
    }
}