// SETTINGS (START)

// настройка игроков
let player00 = {
    color: 'red'
}

let player01 = {
    color: 'blue'
}
let player02 = {
    color: 'purple'
}

// переменные для хексов
const hex00 = document.querySelector('.dice__00');
const hex01 = document.querySelector('.dice__01');
const hex02 = document.querySelector('.dice__02');
const hex03 = document.querySelector('.dice__03');
const hex04 = document.querySelector('.dice__04');
const hex05 = document.querySelector('.dice__05');
const hex06 = document.querySelector('.dice__06');
const hex07 = document.querySelector('.dice__07');
const hex08 = document.querySelector('.dice__08');
const hex09 = document.querySelector('.dice__09');
const hex10 = document.querySelector('.dice__10');
const hex11 = document.querySelector('.dice__11');
const hex12 = document.querySelector('.dice__12');
const hex13 = document.querySelector('.dice__13');
const hex14 = document.querySelector('.dice__14');
const hex15 = document.querySelector('.dice__15');
const hex16 = document.querySelector('.dice__16');
const hex17 = document.querySelector('.dice__17');
const hex18 = document.querySelector('.dice__18');

//массив на всякий случай
hexArray = [hex00, hex01, hex02, hex03, hex04, hex05, hex06, hex07, hex08, hex09, hex10, hex11, hex12, hex13, hex14, hex15, hex16, hex17, hex18]

// настройка костей
const diceA = ['A', '5', '....'];
const diceB = ['B', '2', '.'];
const diceC = ['C', '6', '.....'];
const diceD = ['D', '3', '..'];
const diceE = ['E', '8', '.....'];
const diceF = ['F', '10', '...'];
const diceG = ['G', '9', '....'];
const diceH = ['H', '12', '.'];
const diceI = ['I', '11', '..'];
const diceJ = ['J', '4', '...'];
const diceK = ['K', '8', '.....'];
const diceL = ['L', '10', '...'];
const diceM = ['M', '9', '....'];
const diceN = ['N', '4', '...'];
const diceO = ['0', '5', '....'];
const diceP = ['P', '6', '.....'];
const diceQ = ['Q', '3', '..'];
const diceR = ['R', '11', '..'];

//настройка тайлов
const forest = 'forestgreen'; // лес
const pasture = 'chartreuse'; //пастбище
const arable = 'darkgoldenrod'; // пашня
const hills = 'orange'; //холмы
const mountains = 'grey'; //горы 
const desert = 'yellow'; //пустыня

// переменные узлов примыкания хексов для установки поселений/городов
const node00 = document.querySelector('.cityGrid__cell_00');
const node01 = document.querySelector('.cityGrid__cell_01');
const node02 = document.querySelector('.cityGrid__cell_02');
const node03 = document.querySelector('.cityGrid__cell_03');
const node04 = document.querySelector('.cityGrid__cell_04');
const node05 = document.querySelector('.cityGrid__cell_05');
const node06 = document.querySelector('.cityGrid__cell_06');
const node07 = document.querySelector('.cityGrid__cell_07');
const node08 = document.querySelector('.cityGrid__cell_08');
const node09 = document.querySelector('.cityGrid__cell_09');
const node10 = document.querySelector('.cityGrid__cell_10');
const node11 = document.querySelector('.cityGrid__cell_11');
const node12 = document.querySelector('.cityGrid__cell_12');
const node13 = document.querySelector('.cityGrid__cell_13');
const node14 = document.querySelector('.cityGrid__cell_14');
const node15 = document.querySelector('.cityGrid__cell_15');
const node16 = document.querySelector('.cityGrid__cell_16');
const node17 = document.querySelector('.cityGrid__cell_17');
const node18 = document.querySelector('.cityGrid__cell_18');
const node19 = document.querySelector('.cityGrid__cell_19');
const node20 = document.querySelector('.cityGrid__cell_20');
const node21 = document.querySelector('.cityGrid__cell_21');
const node22 = document.querySelector('.cityGrid__cell_22');
const node23 = document.querySelector('.cityGrid__cell_23');
const node24 = document.querySelector('.cityGrid__cell_24');
const node25 = document.querySelector('.cityGrid__cell_25');
const node26 = document.querySelector('.cityGrid__cell_26');
const node27 = document.querySelector('.cityGrid__cell_27');
const node28 = document.querySelector('.cityGrid__cell_28');
const node29 = document.querySelector('.cityGrid__cell_29');
const node30 = document.querySelector('.cityGrid__cell_30');
const node31 = document.querySelector('.cityGrid__cell_31');
const node32 = document.querySelector('.cityGrid__cell_32');
const node33 = document.querySelector('.cityGrid__cell_33');
const node34 = document.querySelector('.cityGrid__cell_34');
const node35 = document.querySelector('.cityGrid__cell_35');
const node36 = document.querySelector('.cityGrid__cell_36');
const node37 = document.querySelector('.cityGrid__cell_37');
const node38 = document.querySelector('.cityGrid__cell_38');
const node39 = document.querySelector('.cityGrid__cell_39');
const node40 = document.querySelector('.cityGrid__cell_40');
const node41 = document.querySelector('.cityGrid__cell_41');
const node42 = document.querySelector('.cityGrid__cell_42');
const node43 = document.querySelector('.cityGrid__cell_43');
const node44 = document.querySelector('.cityGrid__cell_44');
const node45 = document.querySelector('.cityGrid__cell_45');
const node46 = document.querySelector('.cityGrid__cell_46');
const node47 = document.querySelector('.cityGrid__cell_47');
const node48 = document.querySelector('.cityGrid__cell_48');
const node49 = document.querySelector('.cityGrid__cell_49');
const node50 = document.querySelector('.cityGrid__cell_50');
const node51 = document.querySelector('.cityGrid__cell_51');
const node52 = document.querySelector('.cityGrid__cell_52');
const node53 = document.querySelector('.cityGrid__cell_53');

// переменные для ребер

const edge00 = document.querySelector('.roadGrid__cell_00');
const edge01 = document.querySelector('.roadGrid__cell_01');
const edge02 = document.querySelector('.roadGrid__cell_02');
const edge03 = document.querySelector('.roadGrid__cell_03');
const edge04 = document.querySelector('.roadGrid__cell_04');
const edge05 = document.querySelector('.roadGrid__cell_05');
const edge06 = document.querySelector('.roadGrid__cell_06');
const edge07 = document.querySelector('.roadGrid__cell_07');
const edge08 = document.querySelector('.roadGrid__cell_08');
const edge09 = document.querySelector('.roadGrid__cell_09');
const edge10 = document.querySelector('.roadGrid__cell_10');
const edge11 = document.querySelector('.roadGrid__cell_11');
const edge12 = document.querySelector('.roadGrid__cell_12');
const edge13 = document.querySelector('.roadGrid__cell_13');
const edge14 = document.querySelector('.roadGrid__cell_14');
const edge15 = document.querySelector('.roadGrid__cell_15');
const edge16 = document.querySelector('.roadGrid__cell_16');
const edge17 = document.querySelector('.roadGrid__cell_17');
const edge18 = document.querySelector('.roadGrid__cell_18');
const edge19 = document.querySelector('.roadGrid__cell_19');
const edge20 = document.querySelector('.roadGrid__cell_20');
const edge21 = document.querySelector('.roadGrid__cell_21');
const edge22 = document.querySelector('.roadGrid__cell_22');
const edge23 = document.querySelector('.roadGrid__cell_23');
const edge24 = document.querySelector('.roadGrid__cell_24');
const edge25 = document.querySelector('.roadGrid__cell_25');
const edge26 = document.querySelector('.roadGrid__cell_26');
const edge27 = document.querySelector('.roadGrid__cell_27');
const edge28 = document.querySelector('.roadGrid__cell_28');
const edge29 = document.querySelector('.roadGrid__cell_29');
const edge30 = document.querySelector('.roadGrid__cell_30');
const edge31 = document.querySelector('.roadGrid__cell_31');
const edge32 = document.querySelector('.roadGrid__cell_32');
const edge33 = document.querySelector('.roadGrid__cell_33');
const edge34 = document.querySelector('.roadGrid__cell_34');
const edge35 = document.querySelector('.roadGrid__cell_35');
const edge36 = document.querySelector('.roadGrid__cell_36');
const edge37 = document.querySelector('.roadGrid__cell_37');
const edge38 = document.querySelector('.roadGrid__cell_38');
const edge39 = document.querySelector('.roadGrid__cell_39');
const edge40 = document.querySelector('.roadGrid__cell_40');
const edge41 = document.querySelector('.roadGrid__cell_41');
const edge42 = document.querySelector('.roadGrid__cell_42');
const edge43 = document.querySelector('.roadGrid__cell_43');
const edge44 = document.querySelector('.roadGrid__cell_44');
const edge45 = document.querySelector('.roadGrid__cell_45');
const edge46 = document.querySelector('.roadGrid__cell_46');
const edge47 = document.querySelector('.roadGrid__cell_47');
const edge48 = document.querySelector('.roadGrid__cell_48');
const edge49 = document.querySelector('.roadGrid__cell_49');
const edge50 = document.querySelector('.roadGrid__cell_50');
const edge51 = document.querySelector('.roadGrid__cell_51');
const edge52 = document.querySelector('.roadGrid__cell_52');
const edge53 = document.querySelector('.roadGrid__cell_53');
const edge54 = document.querySelector('.roadGrid__cell_54');
const edge55 = document.querySelector('.roadGrid__cell_55');
const edge56 = document.querySelector('.roadGrid__cell_56');
const edge57 = document.querySelector('.roadGrid__cell_57');
const edge58 = document.querySelector('.roadGrid__cell_58');
const edge59 = document.querySelector('.roadGrid__cell_59');
const edge60 = document.querySelector('.roadGrid__cell_60');
const edge61 = document.querySelector('.roadGrid__cell_61');
const edge62 = document.querySelector('.roadGrid__cell_62');
const edge63 = document.querySelector('.roadGrid__cell_63');
const edge64 = document.querySelector('.roadGrid__cell_64');
const edge65 = document.querySelector('.roadGrid__cell_65');
const edge66 = document.querySelector('.roadGrid__cell_66');
const edge67 = document.querySelector('.roadGrid__cell_67');
const edge68 = document.querySelector('.roadGrid__cell_68');
const edge69 = document.querySelector('.roadGrid__cell_69');
const edge70 = document.querySelector('.roadGrid__cell_70');
const edge71 = document.querySelector('.roadGrid__cell_71');

// SETTINGS (END)