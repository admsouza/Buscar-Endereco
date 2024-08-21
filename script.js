function buscarCEP() {
    let cep = document.getElementById("cep").value;
    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

    fetch(url)
        .then(function(dadoscep) { /* buscar na URL e receber os dados */
            return dadoscep.json(); /* transformar o endereço em JSON */
        })
        .then(function(enderecocep) {
            document.getElementById("rua").value = enderecocep.street || "Não disponível";
            document.getElementById("bairro").value = enderecocep.neighborhood || "Não disponível";
            document.getElementById("cidade").value = enderecocep.city || "Não disponível";
            document.getElementById("estado").value = enderecocep.state || "Não disponível";
        })
        .catch(function(error) {
            console.error('Erro na consulta:', error);
            alert("CEP inválido ou não encontrado.");
            document.getElementById("rua").value = "";
            document.getElementById("bairro").value = "";
            document.getElementById("cidade").value = "";
            document.getElementById("estado").value = "";
        });
}
function searchCNPJ() {
    let cnpj = document.getElementById("cnpj").value;
    let link = "https://brasilapi.com.br/api/cnpj/v1/" + cnpj;


    fetch(link).then(function (dadoscnpj) {
        dadoscnpj.json().then(function (enderecocnpj) {
            document.getElementById("nome").value = enderecocnpj.razao_social;
            document.getElementById("road").value = enderecocnpj.logradouro;
            document.getElementById("numero").value = enderecocnpj.numero;
            document.getElementById("bairro2").value = enderecocnpj.bairro;
            document.getElementById("municipio").value = enderecocnpj.municipio;
            document.getElementById("uf").value = enderecocnpj.uf;
            const opcaoSimples = enderecocnpj.opcao_pelo_simples ? "Sim" : "Não";
            document.getElementById("simples").value = opcaoSimples;


        })

    })
}