function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

     if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let herois = [
    { vitorias: 8, derrotas: 0 },   
    { vitorias: 50, derrotas: 35 },  
    { vitorias: 150, derrotas: 5 },  
    { vitorias: 85, derrotas: 4 }    
];

for (let i = 0; i < herois.length; i++) {
    let heroiAtual = herois[i];
        
    let resultado = calcularNivel(heroiAtual.vitorias, heroiAtual.derrotas);
    
    console.log(resultado);
}