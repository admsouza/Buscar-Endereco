function buscarCEP() {
    let cep = document.getElementById("cep").value;
    // Remove caracteres não numéricos (máscara)
    cep = cep.replace(/\D/g, ""); 

    if (cep.length !== 8) {
        alert("CEP inválido. Insira um CEP com 8 dígitos.");
        return;
    }

    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

    fetch(url)
        .then(function(dadoscep) { 
            return dadoscep.json(); 
        })
        .then(function(enderecocep) {
            document.getElementById("rua").value = enderecocep.street || "Não Cadastrado";
            document.getElementById("bairro").value = enderecocep.neighborhood || "Não Cadastrado";
            document.getElementById("cidade").value = enderecocep.city || "Não Cadastrado";
            document.getElementById("estado").value = enderecocep.state || "Não Cadastrado";
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
    // Remove caracteres não numéricos (máscara)
    cnpj = cnpj.replace(/\D/g, ""); 

    if (cnpj.length !== 14) {
        alert("CNPJ inválido. Insira um CNPJ com 14 dígitos.");
        return;
    }

    let link = "https://brasilapi.com.br/api/cnpj/v1/" + cnpj;

    fetch(link)
        .then(function (dadoscnpj) {
            return dadoscnpj.json();
        })
        .then(function (enderecocnpj) {
            document.getElementById("nome").value = enderecocnpj.razao_social || "Não Cadastrado";
            document.getElementById("road").value = enderecocnpj.logradouro || "Não Cadastrado";
            document.getElementById("numero").value = enderecocnpj.numero || "Não Cadastrado";
            document.getElementById("cep2").value = enderecocnpj.cep || "Não Cadastrado";
            document.getElementById("bairro2").value = enderecocnpj.bairro || "Não Cadastrado";
            document.getElementById("municipio").value = enderecocnpj.municipio || "Não Cadastrado";
            document.getElementById("uf").value = enderecocnpj.uf || "Não Cadastrado";
            const opcaoSimples = enderecocnpj.opcao_pelo_simples ? "Sim" : "Não";
            document.getElementById("simples").value = opcaoSimples;
        })
        .catch(function (error) {
            console.error('Erro na consulta:', error);
            alert("CNPJ inválido ou não encontrado.");
            document.getElementById("nome").value = "";
            document.getElementById("road").value = "";
            document.getElementById("numero").value = "";
            document.getElementById("cep2").value = "";
            document.getElementById("bairro2").value = "";
            document.getElementById("municipio").value = "";
            document.getElementById("uf").value = "";
            document.getElementById("simples").value = "";
        });
}
