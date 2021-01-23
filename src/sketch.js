var canwidth = 600;
var canheight = 600;

var player = new player();
var stats = false;
var imgd;

function preload() {
  font = loadFont('ui/pf.ttf');
  playersprite = loadImage('https://media.discordapp.net/attachments/631977021949476884/632732389994659840/charactor.gif');
  imgd = loadImage('https://img.favpng.com/6/0/9/minecraft-story-mode-diamond-sword-minecraft-pocket-edition-png-favpng-JE9MFSsegkRqkBypm9enAAJZL.jpg');
}

var b = new button(540, 70, statsf, "stats", 8);

var items = [];

items.push(0);
items.push(1);
items.push(2);
items.push(3);
items[0] = new item(100, 400, "Wodden sword", "common", "", 10);
items[1] = new item(200, 400, "Iron sword", "uncommon", "", 20);
items[2] = new item(300, 400, "Diamond sword", "rare", "", 30);
items[3] = new item(400, 400, "Godly sword", "godly", "", 40);

function setup() {
  createCanvas(canwidth, canheight);
}
function mouseClicked() {
  console.log(mouseX, mouseY);
  b.check();
}
function draw() {
  background(200);
  //draw basic ui
  hpbar();
  inven();
  player.show();
  b.show();


  //mouse cooliesons
  if (mouseX >= player.x){
    if (mouseX <= player.x + player.size){
      if (mouseY >= player.y){
        if (mouseY <= player.y + player.size){
          let winx = mouseX + 10;
          let winy = mouseY + 10 - 100;



          rect(winx, winy, 100, 100);
          fill(255, 0, 0);
          text(`speed: ${player.speed}`, winx + 5, winy + 10)
        }
      }
    }
  }
  //for each item
  for (var i = 0; i < items.length; i++) {
    if (items[i].exists == true){
      items[i].show();
      if (mouseX >= items[i].x){
        if (mouseX <= items[i].x + 20){
          if (mouseY >= items[i].y){
            if (mouseY <= items[i].y + 20){
              let winx = mouseX + 10;
              let winy = mouseY + 10 - 100;

              rect(winx, winy, 75, 45);
              textFont(font);
              textSize(5);
              if (items[i].rare == "common"){
                fill(70, 255, 70);
              }else if (items[i].rare == "uncommon"){
                fill(40, 255, 40);
              }else if (items[i].rare == "rare"){
                fill(40, 40, 255);
              }else if (items[i].rare == "godly"){
                fill(230, 230, 100);
              }
              text(`${items[i].name}`, winx + 5, winy + 10);
              text(`Rarity:  ${items[i].rare}`, winx + 5, winy + 20);
              text(`Damage:  ${items[i].dmg}`, winx + 5, winy + 30);
            }
          }
        }
      }
    }
  }

  for (var i = 0; i < items.length; i++) {
    if (items[i].exists == true){
      if (Math.abs(items[i].x - player.x) <= player.pickuprange){
        if (Math.abs(items[i].y - player.y ) <= player.pickuprange){
          tip("E");
          if (keyIsDown(69)) {
            items[i].pickup(items[i]);
          }
        }
      }
    }
  }


  if (keyIsDown(32)) {
    //show UI
    player.dmg(1);
  }

  //movement
  if (keyIsDown(83)) {
    player.y += player.speed;
  }
  if (keyIsDown(87)) {
    player.y -= player.speed;
  }
  if (keyIsDown(68)) {
    player.x += player.speed;
  }
  if (keyIsDown(65)) {
    player.x -= player.speed;
  }




  if (keyIsDown(49)) {
    hold(1);
  }
  if (keyIsDown(50)) {
    hold(2);
  }
  if (keyIsDown(51)) {
    hold(3);
  }
  if (keyIsDown(52)) {
    hold(4);
  }
}
