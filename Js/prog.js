function calcular(){

    let tempoPlanejado = Number(document.getElementById("tempoPlanejado").value)
    let tempoParado = Number(document.getElementById("tempoParado").value)
    let produzidas = Number(document.getElementById("produzidas").value)
    let defeito = Number(document.getElementById("defeito").value)
    
    let tempoOperacao = tempoPlanejado - tempoParado
    
    let disponibilidade = (tempoOperacao / tempoPlanejado) * 100
    
    let pecasBoas = produzidas - defeito
    
    let qualidade = (pecasBoas / produzidas) * 100
    
    let eficiencia = (disponibilidade * qualidade) / 100
    
    document.getElementById("disponibilidade").innerText =
    "Disponibilidade: " + disponibilidade.toFixed(2) + "%"
    
    document.getElementById("qualidade").innerText =
    "Qualidade: " + qualidade.toFixed(2) + "%"
    
    document.getElementById("eficiencia").innerText =
    "Eficiência da Produção: " + eficiencia.toFixed(2) + "%"
    
    }