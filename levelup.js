var level = 1;
var pontosXP = 0;
var condicao = level + 3;
var nome = "";


function levelUp() {

    if (level < 5) {
        level++
        condicao += 3
    } else if (level < 10) {
        level++
        condicao += 4
    } else if (level < 30) {
        level++
        condicao += 7
    } else {
        level++
        condicao += 21
    }

    alert("Level up!");
}

function calculaXP(xp) {

    pontosXP += xp
    console.log(level);

    if (pontosXP > condicao) {
        levelUp();
        xp = 0;
    }


    mostraNivel();
}

function mostraNivel() {
    alert("Nivel: " + level);
    alert("pontos XP: " + pontosXP);

}