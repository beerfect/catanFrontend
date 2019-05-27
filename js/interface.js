// ИНТЕРФЕЙС (START)

// createTileOnHex(forest,hex00);                // создать тайл лес на хексе 0
// setDiceOnHex(diceA, hex00);                   // установить кость А на хекс 0
// addPlayersSettlementOnNone(player00,node00);  // добавить поселение игрока 0 на узел 0
// addPlayersCityToNode(player01,node01);        // добавить грод игрока 1 на узел 1
// pavePlayersRoadOnEdge(player00,edge00);       // проложить дорогу игрока 0 по ребру 0

// clearHexFormDice(hex00);                      // очистить хекс от кости
// clearHexFormTile(hex00);                      // очистить хекс от тайла
// clearNode(node00);                            // очистить узел от поселения/города
// clearEdge(edge00);                            // очистить ребро от дорог

// ИНТЕРФЕЙС (END)
// TESTS (START) 

createTileOnHex(forest,hex00); 
createTileOnHex(desert,hex01); 
createTileOnHex(pasture,hex02); 
createTileOnHex(mountains,hex03); 
createTileOnHex(hills,hex04); 
createTileOnHex(forest,hex05); 
createTileOnHex(mountains,hex06); 
createTileOnHex(hills,hex07); 
createTileOnHex(forest,hex08); 
createTileOnHex(desert,hex09); 
createTileOnHex(pasture,hex10); 
createTileOnHex(desert,hex11); 

setDiceOnHex(diceA,hex00); 
setDiceOnHex(diceB,hex01); 
setDiceOnHex(diceC,hex02); 
setDiceOnHex(diceD,hex03); 
setDiceOnHex(diceE,hex04); 
setDiceOnHex(diceF,hex05); 
setDiceOnHex(diceG,hex06); 
setDiceOnHex(diceH,hex07); 
setDiceOnHex(diceI,hex08); 
setDiceOnHex(diceJ,hex09); 
setDiceOnHex(diceK,hex10); 

addPlayersSettlementOnNode(player00,node00); 
addPlayersSettlementOnNode(player00,node01); 
addPlayersSettlementOnNode(player00,node02); 

addPlayersSettlementOnNode(player01,node03); 
addPlayersSettlementOnNode(player01,node04); 
addPlayersSettlementOnNode(player01,node05); 
addPlayersSettlementOnNode(player01,node06); 

addPlayersCityOnNode(player02,node07);
addPlayersCityOnNode(player02,node08);
addPlayersCityOnNode(player02,node09);
addPlayersCityOnNode(player02,node10);

pavePlayersRoadOnEdge(player00,edge00);
pavePlayersRoadOnEdge(player00,edge01);
pavePlayersRoadOnEdge(player00,edge02);
pavePlayersRoadOnEdge(player00,edge03);
pavePlayersRoadOnEdge(player00,edge04);
pavePlayersRoadOnEdge(player00,edge05);

pavePlayersRoadOnEdge(player01,edge06);
pavePlayersRoadOnEdge(player01,edge07);
pavePlayersRoadOnEdge(player01,edge08);
pavePlayersRoadOnEdge(player01,edge09);

pavePlayersRoadOnEdge(player02,edge11);
pavePlayersRoadOnEdge(player02,edge12);
pavePlayersRoadOnEdge(player02,edge13);
pavePlayersRoadOnEdge(player02,edge14);
pavePlayersRoadOnEdge(player02,edge15);
pavePlayersRoadOnEdge(player02,edge16);

clearEdge(edge02);
clearEdge(edge03);
clearEdge(edge07);
clearEdge(edge08);
clearEdge(edge13);
clearEdge(edge14);

clearHexFormTile(hex00); 
clearHexFormTile(hex01); 
clearHexFormTile(hex02); 

clearHexFormDice(hex07);  
clearHexFormDice(hex08);  
clearHexFormDice(hex09);  
clearHexFormDice(hex10);

clearNode(node03);
clearNode(node04);
clearNode(node05);
clearNode(node06);

// TESTS (END)