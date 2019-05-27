// ФУНКЦИИ ПОД КАПОТОМ (START)

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
function addPlayersSettlementOnNode(player,node) {
    clearNode(node);
    let settlement = document.createElement('div');
    settlement.className = 'settlement';
    settlement.style.backgroundColor = player.color;
    node.appendChild(settlement);
}

function addPlayersCityOnNode(player,node){
    clearNode(node);
    let city = document.createElement('div');
    city.className = 'city';
    city.style.backgroundColor = player.color;
    node.appendChild(city);
}

function clearNode(node) {
    if (node.childNodes.length){
        node.innerHTML = '';
    }
}

function clearHexFormTile(hex){
    let hexNumber = hex.classList[1].slice(6);
    document.querySelector(`.hex__${hexNumber}`).style.fill = '#000';
}

function clearHexFormDice(hex){
    hex.querySelector('.dice__content').style.backgroundColor = 'transparent';
    hex.querySelector('.dice__content').style.borderWidth = '2px;';
    hex.querySelector('.dice__content').style.borderStyle = 'solid';
    hex.querySelector('.dice__content').style.borderColor = 'transparent';
    hex.querySelector('.dice__content_letter').innerHTML = '';
    hex.querySelector('.dice__content_number').innerHTML = '';
    hex.querySelector('.dice__content_dots').innerHTML = '';
}
function pavePlayersRoadOnEdge(player, edge) {

    if (edge.classList.contains('roadGrid__cell_upDirection')) {
        edge.style.backgroundImage = `linear-gradient(to bottom right, transparent 45%, ${player.color}, transparent 54%)`;
    }
    if (edge.classList.contains('roadGrid__cell_downDirection')) {
        edge.style.backgroundImage = `linear-gradient(to top right, transparent 45%, ${player.color}, transparent 54%)`;
    }
    if (edge.classList.contains('roadGrid__cell_verticalDirection')) {
        edge.style.backgroundImage = `linear-gradient(to right, transparent 0%, ${player.color}, transparent 10%)`;
    }
}

function clearEdge(edge) {
    edge.style.backgroundImage = 'none';
}

// ФУНКЦИИ ПОД КАПОТОМ (END)