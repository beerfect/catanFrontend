// SETTINGS (START)

let hex00 = document.querySelector('.dice__00');
let hex01 = document.querySelector('.dice__01');
let hex02 = document.querySelector('.dice__02');
let hex03 = document.querySelector('.dice__03');
let hex04 = document.querySelector('.dice__04');
let hex05 = document.querySelector('.dice__05');
let hex06 = document.querySelector('.dice__06');
let hex07 = document.querySelector('.dice__07');
let hex08 = document.querySelector('.dice__08');
let hex09 = document.querySelector('.dice__09');
let hex10 = document.querySelector('.dice__10');
let hex11 = document.querySelector('.dice__11');
let hex12 = document.querySelector('.dice__12');
let hex13 = document.querySelector('.dice__13');
let hex14 = document.querySelector('.dice__14');
let hex15 = document.querySelector('.dice__15');
let hex16 = document.querySelector('.dice__16');
let hex17 = document.querySelector('.dice__17');
let hex18 = document.querySelector('.dice__18');

hexArray = [hex00, hex01, hex02, hex03, hex04, hex05, hex06, hex07, hex08, hex09, hex10, hex11, hex12, hex13, hex14, hex15, hex16, hex17, hex18]

let diceA = ['A', '5', '....'];
let diceB = ['B', '2', '.'];
let diceC = ['C', '6', '.....'];
let diceD = ['D', '3', '..'];
let diceE = ['E', '8', '.....'];
let diceF = ['F', '10', '...'];
let diceG = ['G', '9', '....'];
let diceH = ['H', '12', '.'];
let diceI = ['I', '11', '..'];
let diceJ = ['J', '4', '...'];
let diceK = ['K', '8', '.....'];
let diceL = ['L', '10', '...'];
let diceM = ['M', '9', '....'];
let diceN = ['N', '4', '...'];
let diceO = ['0', '5', '....'];
let diceP = ['P', '6', '.....'];
let diceQ = ['Q', '3', '..'];
let diceR = ['R', '11', '..'];

let forest = 'forestgreen'; // лес
let pasture = 'chartreuse'; //пастбище
let arable = 'darkgoldenrod'; // пашня
let hills = 'orange'; //холмы
let mountains = 'grey'; //горы 
let desert = 'yellow'; //пустыня

// SETTINGS (END)
// ПОД КАПОТОМ (START)

function setDiceOnHex(dice, hex) {
    hex.querySelector('.dice__content_letter').innerHTML = dice[0];
    hex.querySelector('.dice__content_number').innerHTML = dice[1];
    hex.querySelector('.dice__content_dots').innerHTML = dice[2];
    if (dice[2] === '.....') {
        hex.style.color = 'red';
    }
    showDice(hex);
}

function showDice(hex) {
    hex.querySelector('.dice__content').style.backgroundColor = 'rgb(210, 221, 113)';
    hex.querySelector('.dice__content').style.borderWidth = '2px;';
    hex.querySelector('.dice__content').style.borderStyle = 'solid';
    hex.querySelector('.dice__content').style.borderColor = '#fff';
}

function createTileOnHex(tile, hex) {
    let hexNumber = hex.classList[1].slice(6);
    document.querySelector(`.hex__${hexNumber}`).style.fill = tile;
}
// ПОД КАПОТОМ (END)
// ИНТЕРФЕЙС (START)

// setDiceOnHex(diceA,hex00);

setDiceOnHex(diceA, hex00);
setDiceOnHex(diceB, hex01);
setDiceOnHex(diceC, hex02);
setDiceOnHex(diceD, hex03);
setDiceOnHex(diceE, hex04);
setDiceOnHex(diceF, hex05);
setDiceOnHex(diceG, hex06);
setDiceOnHex(diceH, hex07);
setDiceOnHex(diceI, hex08);
setDiceOnHex(diceJ, hex10);
setDiceOnHex(diceK, hex11);
setDiceOnHex(diceL, hex12);
setDiceOnHex(diceM, hex13);
setDiceOnHex(diceN, hex14);
setDiceOnHex(diceO, hex15);
setDiceOnHex(diceP, hex16);
setDiceOnHex(diceQ, hex17);
setDiceOnHex(diceR, hex18);

for (let hex of hexArray){
    createTileOnHex(forest,hex);
}

// ИНТЕРФЕЙС (END)