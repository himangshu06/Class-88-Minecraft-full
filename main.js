 var canvas = new fabric.Canvas("my_canvas");
 playerX = 10;
 playerY = 10;
 block_img_width=30;
 block_img_height=30;
 var player_object="";
 var block_img_object="";

 function playerUpdate(){
     fabric.Image.fromURL("player.png",function(Img){
         player_object=Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({
             top:playerY,
             left:playerX
         })
         canvas.add(player_object);

     })
 }
 function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:playerY,
            left:playerX
        })
        canvas.add(block_img_object);
        
    })
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey && keyPressed == "80"){
        console.log("p&shiftPressedTogether");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current-width").innerHTML=block_img_width;
        document.getElementById("current-height").innerHTML=block_img_height;
    }
    if(e.shiftKey && keyPressed == "77"){
        console.log("m&shiftPressedTogether");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current-width").innerHTML=block_img_width;
        document.getElementById("current-height").innerHTML=block_img_height;
    }
    if(keyPressed=="38"){
      up();
      console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
      }
      if(keyPressed=="37"){
        left();
        console.log("left");
      }
      if(keyPressed=="39"){
        right();
        console.log("right");
      }
      if(keyPressed=="87"){
        new_image("wall.jpg");
        console.log("w");
      }
      if(keyPressed=="71"){
        new_image("ground.png");
        console.log("g");
      }
      if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("l");
      }
      if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
      }
      if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("r");
      }
      if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
      }
      if(keyPressed=="68"){
        new_image("dark_green.png");
        console.log("d");
      }
      if(keyPressed=="85"){
        new_image("unique.png");
        console.log("u");
      }
      if(keyPressed=="67"){
        new_image("cloud.jpg");
        console.log("c");
      }
}
function up(){
  if(playerY >=0){
    playerY=playerY-block_img_height;
    console.log("block image height="+block_img_height);
    console.log("when up arrow key is pressed,X="+playerX+",Y="+playerY);
    canvas.remove(player_object);
    playerUpdate();
  }
}
function down(){
  if(playerY <=500){
    playerY=playerY+block_img_height;
    console.log("block image height="+block_img_height);
    console.log("when down arrow key is pressed,X="+playerX+",Y="+playerY);
    canvas.remove(player_object);
    playerUpdate();
  }
}
function left(){
  if(playerX >=0){
    playerX=playerX-block_img_width;
    console.log("block image width="+block_img_width);
    console.log("when left arrow key is pressed,X="+playerX+",Y="+playerY);
    canvas.remove(player_object);
    playerUpdate();
  }
}
function right(){
  if(playerX <=850){
    playerX=playerX+block_img_width;
    console.log("block image width="+block_img_width);
    console.log("when right arrow key is pressed,X="+playerX+",Y="+playerY);
    canvas.remove(player_object);
    playerUpdate();
  }
}
