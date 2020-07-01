function carregaDadosDepto(){
    var parametro = window.location.search;
    console.log("URL = "+parametro);

    var numDepto = parametro.substr(4);

    console.log("Numero do departamento = "+numDepto);

    // a partir daqui posso fazer um fetch no endpoint de departamento e
    // preencher um conjunto de linhas com todos os usuários daquele depto

    fetch('http://localhost:8080/departamentos/' + numDepto) {
        .then(departamento => departamento.json())
        .then(departamento => console.log(departamento))
    }
    
    function mostrarUsuarios(resp) {
        console.log(resp);
        var contSTR

    }
}