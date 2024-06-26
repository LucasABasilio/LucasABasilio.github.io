let exibicaoagenda = [];
let i = 0;
let x = 0;
let auxiliar = [];

function incluir(){
    this.event.preventDefault();

    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let endereco = document.getElementById("endereco");
    let telefone = document.getElementById("telefone");
    let salvar = document.getElementById("botaosalvar");
    let cancelar = document.getElementById("botaocancelar");
    let incluir = document.getElementById("botaoincluir");
    let excluir = document.getElementById("botaoexcluir");
    let editar = document.getElementById("botaoeditar");

    salvar.classList.add("salvarable");
    salvar.disabled = false;
    cancelar.classList.add("cancelarable");
    cancelar.disabled = false;
    incluir.classList.remove("incluirable");
    incluir.disabled = true;
    excluir.classList.remove("excluirable");
    excluir.disabled = true;
    editar.classList.remove("editarable");
    editar.disabled = true;

    nome.disabled = false;
    sobrenome.disabled = false;
    endereco.disabled = false;
    telefone.disabled = false;
    nome.value = "";
    sobrenome.value = "";
    endereco.value = "";
    telefone.value = "";
    nome.focus();
    
}

function editar(){
    this.event.preventDefault();

    let nome = document.getElementById("nome").disabled = false;
    let sobrenome = document.getElementById("sobrenome").disabled = false;
    let endereco = document.getElementById("endereco").disabled = false;
    let telefone = document.getElementById("telefone").disabled = false;
    let excluir = document.getElementById("botaoexcluir");
    let salvar = document.getElementById("botaosalvar");
    let cancelar = document.getElementById("botaocancelar");
    let incluir = document.getElementById("botaoincluir");
    let editar = document.getElementById("botaoeditar");

    salvar.classList.add("salvarable");
    salvar.disabled = false;
    cancelar.classList.add("cancelarable");
    cancelar.disabled = false;
    incluir.classList.remove("incluirable");
    incluir.disabled = true;
    editar.classList.remove("editarable");
    editar.disabled = true;
    excluir.classList.remove("excluirable");
    excluir.disabled = true;

    for(let j = 0; j < exibicaoagenda.length; j++){
        auxiliar[j] = exibicaoagenda[j];
    }
    exibicaoagenda.splice(i,1);
    x = 1;
}

function salvar(){
    this.event.preventDefault();
    
    let informacaoagenda = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value
    }

    let espaconome = document.getElementById("nome");
    let espacosobrenome = document.getElementById("sobrenome");
    let espacoendereco = document.getElementById("endereco");
    let espacotelefone = document.getElementById("telefone");
    let editar = document.getElementById("botaoeditar");
    let excluir = document.getElementById("botaoexcluir");
    let incluir = document.getElementById("botaoincluir");
    let cancelar = document.getElementById("botaocancelar");
    let salvar = document.getElementById("botaosalvar");

    espaconome.disabled = true;
    espacosobrenome.disabled = true;
    espacoendereco.disabled = true;
    espacotelefone.disabled = true;

    editar.classList.add("editarable");
    editar.disabled = false;
    excluir.classList.add("excluirable");
    excluir.disabled = false;
    incluir.classList.add("incluirable");
    incluir.disabled = false;
    cancelar.classList.remove("cancelarable");
    cancelar.disabled = true;
    salvar.classList.remove("salvarable");
    salvar.disabled = true;

    if(x === 1){
        auxiliar[i] = informacaoagenda;
        for(let j = 0; j < auxiliar.length; j++){
            exibicaoagenda[j] = auxiliar[j];
        }
        x = 0;
    }
    else{
    exibicaoagenda.push(informacaoagenda);
    i = exibicaoagenda.length - 1;
    }
}

function cancelar(){
    this.event.preventDefault();

    let nome = document.getElementById("nome").disabled = true;
    let sobrenome = document.getElementById("sobrenome").disabled = true;
    let endereco = document.getElementById("endereco").disabled = true;
    let telefone = document.getElementById("telefone").disabled = true;
    let salvar = document.getElementById("botaosalvar");
    let cancelar = document.getElementById("botaocancelar");
    let incluir = document.getElementById("botaoincluir");
    let editar = document.getElementById("botaoeditar");
    let excluir = document.getElementById("botaoexcluir");

    salvar.classList.remove("salvarable");
    salvar.disabled = true;
    cancelar.classList.remove("cancelarable");
    cancelar.disabled = true;
    incluir.classList.add("incluirable");
    incluir.disabled = false;

    if(exibicaoagenda.length !== 0){
        editar.classList.add("editarable");
        editar.disabled = false;
        excluir.classList.add("excluirable");
        excluir.disabled = false;
    }

    if(x === 1){
        for(let j = 0; j < auxiliar.length; j++){
            exibicaoagenda[j] = auxiliar[j];
        }
        x = 0;
    }
}

function excluir(){
    this.event.preventDefault();

    exibicaoagenda.splice(i,1);

    if(exibicaoagenda.length === 0){
        let nome = document.getElementById("nome");
        let sobrenome = document.getElementById("sobrenome");
        let endereco = document.getElementById("endereco");
        let telefone = document.getElementById("telefone");
        let editar = document.getElementById("botaoeditar");
        let excluir = document.getElementById("botaoexcluir");

        editar.classList.remove("editarable");
        editar.disabled = true;
        excluir.classList.remove("excluirable");
        excluir.disabled = true;
    
        
        nome.value = "";
        sobrenome.value = "";
        endereco.value = "";
        telefone.value = "";
        
    }
    if(i === exibicaoagenda.length){
        exibir(exibicaoagenda, i - 1);
        i--;
    }
    else{
        exibir(exibicaoagenda, i);
    }
}

function irparaprimeiro(){
    i = 0;
    exibir(exibicaoagenda, i);
}

function irparaanterior(){
    if(i !== 0){
        i--;
        exibir(exibicaoagenda, i);
    }
}

function irparaproximo(){
    if(i !== exibicaoagenda.length -1){
        i++;
        exibir(exibicaoagenda, i);
    }
}

function irparaultimo(){
    i = exibicaoagenda.length - 1;
    exibir(exibicaoagenda, i);
}

function exibir(exibicaoagenda, i){

    let exibirnome = document.getElementById("nome");
    let exibirsobrenome = document.getElementById("sobrenome");
    let exibirendereco = document.getElementById("endereco");
    let exibirtelefone = document.getElementById("telefone");
    
    exibirnome.value = exibicaoagenda[i].nome;
    exibirsobrenome.value = exibicaoagenda[i].sobrenome;
    exibirendereco.value = exibicaoagenda[i].endereco;
    exibirtelefone.value = exibicaoagenda[i].telefone;
}