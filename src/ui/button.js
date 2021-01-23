var font;

function button(x, y, func, btext, size){
  this.x = x;
  this.y = y;

  this.btext = btext;
  this.size = size;

  this.width = 40;
  this.height = 20;

  this.onclick = func;

  this.check = function(){
    if (mouseX >= this.x){
      if (mouseX <= this.x + this.width){
        if (mouseY >= this.y){
          if (mouseY <= this.y + this.height){
            this.onclick();
          }
        }
      }
    }
  }

  this.show = function(){
    fill(255, 100, 100);
    rect(this.x, this.y, this.width, this.height);
    fill(0, 0, 0);
    textSize(size);
    textFont(font);
    text(this.btext, this.x + 2, this.y + 15);
  }
}
