function enviar() {
    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Valores digitados = " +txtEmail + " / " + txtSenha);

    var msmBody = {
        email: txtEmail,
        senha: txtSenha
    }

    var cabecalho = {
        method : "POST",
        body : JSON.stringify(msgBody),
        headers : {
            'Content-type':'application/json'
        }

    }
    fetch("http://localhost:8080/login", cabecalho)
        .then(resposta=>tratarResultado(resposta));

    }
    function tratarResultado(resp) {
        if (resp.status == 200) {
            alert("Usuario identificado");
        }
        else if (resp.status == 404) {
            alert("Usuario não foi encontrado em nossa base");
        }
        else if (resp.status == 403) {
            alert("Senha inválida");
        }
    }