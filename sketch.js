var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1520, 750);
  spacecraft = createSprite(500,500);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.30;
  
  iss = createSprite(500,300);
  iss.addImage(issimg);
  iss.scale = 0.50;
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);
    // spacecraft.x = spacecraft.x + Random(-1,1);
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

  // if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

  // if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

   //if(spacecraft.y <= (iss.y+50) && spacecraft.x <= (iss.x+50)){
    // hasDocked = true;
     //textSize(25);
     //fill("white")
     //text("Docking UnSuccessful!", 200, 200);
   //}
   drawSprites();

   if(spacecraft.y <= (iss.y+140) && spacecraft.x <=(iss.x-70)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);

   }

  
//text(mouseX+","+mouseY,mouseX,mouseY)
 
}

//403,363