function item(x, y, name, rare, desc, dmg){
  this.img = imgd;
  this.x = x;
  this.y = y;

  this.desc = desc;

  this.dmg = dmg;

  this.name = name;

  this.exists = true;

  this.rare = rare;

  //animation stuff
  this.animationPath = [this.y];
  this.curframe = 0;
  var frames = 24;

  for (var i = 0; i < 24; i++) {
    this.animationPath.push(undefined);
    if (i >= 12){
      if (i != 0){
        this.animationPath[i] = this.animationPath[i-1] - 0.1;
      }
    }else{
      if (i != 0){
        this.animationPath[i] = this.animationPath[i-1] + 0.1;
      }
    }
  }

  this.animationPath[24] = this.animationPath[23];

  this.pickup = function(item){
    this.exists = false;
    if (player.inventory.length != player.maxinven){
      player.inventory.push(item)
    }
  }

  this.show = function(){
    if (this.exists == true){
      if (this.curframe == this.animationPath.length){
        this.curframe = 0;
      }
      image(imgd, this.x, this.animationPath[this.curframe], 20, 20);
      this.curframe++;
    }
  }
}
