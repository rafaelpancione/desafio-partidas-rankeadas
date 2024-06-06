let qtdVitorias;
let qtdDerrotas;
let rank;

function calculaRank(qtdVitorias, qtdDerrotas) {
    let nivel;
    let saldoRankeadas;
    saldoRankeadas = qtdVitorias - qtdDerrotas;
    
    if (saldoRankeadas <= 10) {
        nivel = 'Ferro'
    } else if(saldoRankeadas <= 20){
        nivel = 'Bronze'
    } else if(saldoRankeadas <= 50){
        nivel = 'Prata'
    }else if(saldoRankeadas <= 80){
        nivel = 'Ouro'
    }else if(saldoRankeadas <= 90){
        nivel = 'Diamante'
    }else if(saldoRankeadas <= 100){
        nivel = 'Lendário'
    }else if(saldoRankeadas >= 101){
        nivel = 'Imortal'
    }
    return console.log("O Herói tem de saldo de " + saldoRankeadas + " está no nível de " + nivel)
}
calculaRank(110,1);

