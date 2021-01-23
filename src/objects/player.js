function player(){
  this.x = canwidth / 2;
  this.y = canheight / 2;

  this.hp = 100;

  this.pickuprange = 40;

  this.size = 20;

  this.speed = 2;

  this.defence = 0;

  this.inventory = [];
  this.maxinven = 4;

  this.effects = [];

  this.show = function(){
    fill(0, 10, 10);
    image(playersprite, this.x, this.y, this.size, this.size);
  }

  this.neweffect = function(effect){
    this.effects.push(effect);
  }

  this.dmg = function(dmgtaken){
    this.hp = this.hp - dmgtaken;
  }
}
