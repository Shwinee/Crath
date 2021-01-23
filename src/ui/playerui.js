function hpbar(){
  fill(0, 0, 0);
  rect(5, 5, 110, 20);
  fill(255, 10, 10);
  rect(10, 10, Math.abs(player.hp), 10);
}
var hilight = [200, 200, 200, 200];
var stats = false;


function tip(tipS){
  var bgx = canwidth - 260;
  var bgy = 10;
  fill(52);

  rect(bgx, bgy, 50, 50);
  textSize(10);
  fill(0, 10, 0);
  text(tipS, bgx+20, bgy+35);
}

function statsf(){
  if (stats == false){
    stats = true;
  }else{
    stats = false;
  }
  console.log(stats);
}

function inven(){
  var bgx = canwidth - 200;
  var bgy = 10;

  //back ground
  fill(70, 50, 50);
  rect(bgx, bgy, 185, 50);

  //item slots
  fill(hilight[0]);
  rect(bgx + 5, bgy + 5, 40, 40);
  if (player.inventory[0] != undefined){
    //render item
    // rect(bgx + 5, bgy + 5, 40, 40);

    fill(5, 10, 5);
    textSize(4);
    text(player.inventory[0].name, bgx + 6, bgy + 5, 35, 35);
  }
  fill(hilight[1]);
  rect(bgx + 50, bgy + 5, 40, 40);
  if (player.inventory[1] != undefined){
    //render item
    // rect(bgx + 5, bgy + 5, 40, 40);

    fill(5, 10, 5);
    textSize(4);
    text(player.inventory[1].name, bgx + 56, bgy + 5, 35, 35);
  }
  fill(hilight[2]);
  rect(bgx + 95, bgy + 5, 40, 40);
  if (player.inventory[2] != undefined){
    //render item
    // rect(bgx + 5, bgy + 5, 40, 40);

    fill(5, 10, 5);
    textSize(4);
    text(player.inventory[2].name, bgx + 101, bgy + 5, 35, 35);
  }
  fill(hilight[3]);
  rect(bgx + 140, bgy + 5, 40, 40);
  if (player.inventory[3] != undefined){
    //render item
    // rect(bgx + 5, bgy + 5, 40, 40);

    fill(5, 10, 5);
    textSize(4);
    text(player.inventory[3].name, bgx + 146, bgy + 5, 35, 35);
  }
}

function hold(slot){
  hilight = [200, 200, 200, 200];
  slot--;
  hilight[slot] = 10;
}
