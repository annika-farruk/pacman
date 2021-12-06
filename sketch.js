var wall1 , wall2 , wall3, wall4, wall5 , wall6 , wall7 ,wall8 , wall9 , wall10 ;
var wall11, wall12 ,wall13 ,wall14, wall15 , wall16 , wall17 , wall18 , wall19 , wall20 ;
var wall21 , wall22 , wall23 , wall24 , wall25 , wall26 , wall27 , wall28 , wall29 , wall30 ;
var wall31 , wall32 , wall33 , wall34 , wall35 , wall36 , wall37,wall38, wall39, wall40;
var wall41 ,wall42, wall43;
var k1,k2,k3,k4,k5,k6,k7,k8,k9,k10;
var award, awardImage, gameOverImage, gameOver, youWinImage, youWin;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20;
var pacmanImage, pacman;
var ghost1,ghost2,ghost3,ghost4,ghost5,ghost6;
var pinkghostImage, blueghostImage,yellowghostImage,greenghostImage,redghostImage,violetghostImage;
var wrong,wrongImage;
var tikImage;

function preload(){
  greenghostImage = loadImage("images/green.png");
  pacmanImage = loadImage("images/pacman.png");
  pacmanLeft = loadImage("images/pacmanLeft.png");
  awardImage = loadImage("images/award1.png");
  youWinImage = loadImage("images/winning.png");
  gameOverImage = loadImage("images/gameOver.png")
  wrongImage = loadImage("images/wrong1.png")

  pinkghostImage=loadImage("images/pink.png")
  blueghostImage = loadImage("images/blue.png");
  yellowghostImage = loadImage("images/yellow.png");
  redghostImage = loadImage("images/red.png");
  violetghostImage = loadImage("images/violet.png");

}

function setup(){
  createCanvas(1304,661);

  k1 = createSprite(1000,152,20,20);
  k1.addImage(wrongImage);
  k1.scale = .2;
  k2 = createSprite(400,529,20,20);
  k2.addImage(wrongImage);
  k2.scale = .2;
  k3 = createSprite(1300,385,20,20);
  k3.addImage(wrongImage);
  k3.scale = .2;
  k4 = createSprite(600,420,20,20);
  k4.addImage(wrongImage);
  k4.scale = .2;
  k5 = createSprite(170,198,20,20);
  k5.addImage(wrongImage);
  k5.scale = .2;
  k6 = createSprite(1100,490,20,20);
  k6.addImage(wrongImage);
  k6.scale = .2;
  k7 = createSprite(300,100,20,20);
  k7.addImage(wrongImage);
  k7.scale = .2;
  k8 = createSprite(1000,490,20,20);
  k8.addImage(wrongImage);
  k8.scale = .2;
  k9 = createSprite(1100,198,20,20);
  k9.addImage(wrongImage);
  k9.scale = .2;
  k10 = createSprite(125,122,20,20);
  k10.addImage(wrongImage);
  k10.scale = .2;


 



  pacman = createSprite(652,375,30,30)
  pacman.addImage(pacmanImage);
  pacman.scale = .1;
  ghost1 = createSprite(480,200,30,30);
  ghost1.addImage(greenghostImage);
  ghost1.scale =.2;
  ghost2 = createSprite(550,300,30,30);
  ghost2.addImage(pinkghostImage);
  ghost2.scale = .2;
  ghost3 = createSprite(500,400,30,30);
  ghost3.addImage(blueghostImage);
  ghost3.scale = .2;
  ghost4 = createSprite(550,500,30,30);
  ghost4.addImage(yellowghostImage);
  ghost4.scale = .2;
  ghost5 = createSprite(450,600,30,30); 
  ghost5.addImage(redghostImage);
  ghost5.scale = .4;
  ghost6 = createSprite(400,500,30,30);
  ghost6.addImage(violetghostImage);
  ghost6.scale = 0.3;
  wall1 = createSprite(550, 650,661,3);
  wall1.shapeColor = "orange";


  award = createSprite(30,50,20,20);
  award.addImage(awardImage);
  award.scale = .4


  //this wall is the most bottom (this = wall1)
  //wall1.setAnimation("wall");
  wall1.scale = 3;
  wall2 = createSprite(652,10,661,3);
  wall2.shapeColor = "orange";
  //wall2 is on the left side of
  //wall2.setAnimation("wall");
  wall2.scale = 3;
  wall3 = createSprite(10, 330,3,1304);
  wall3.shapeColor = "orange";
  //wall3.setAnimation("wall");
  wall3.scale = 3;
  wall4 = createSprite(1296,330,3,1304);
  wall4.shapeColor = "orange";
  //wall4.setAnimation("wall");
  wall4.scale = 3;
  wall5 = createSprite(735,100,1,200);
  wall5.shapeColor = "yellow";
  //wall5.setAnimation("wall");
  wall5.scale = 3;
  wall5.rotation = 90;
  wall6 = createSprite(966, 150,1,100);
  wall6.shapeColor = "yellow";
  //wall6.setAnimation("wall");
  wall6.scale = 3;
  wall6.rotation = 90;
  wall7 = createSprite(300,150,120,1);
  wall7.shapeColor = "yellow";
  //wall7.setAnimation("animation_1");
  wall7.scale = 3.4;
  wall8 = createSprite(1100,200,1,50);
  wall8.shapeColor = "yellow";
  //wall8.setAnimation("wall");
  wall8.scale = 2.7;
  wall8.rotation = 90;
  wall9 = createSprite(940, 80,50,1);
  wall9.shapeColor = "yellow";
  //wall9.setAnimation("wall");
  wall9.scale = 2.7;
  wall9.rotation = 90;
  wall10 = createSprite(300,77,1,47);
  wall10.shapeColor = "yellow";
  //wall10.setAnimation("wall");
  wall10.scale = 3;
  wall11 = createSprite(200,79,1,90);
  wall11.shapeColor = "yellow";
  //wall11.setAnimation("wall");
  wall11.scale = 2.5;
  wall11.rotation = 90;
  wall12 = createSprite(1093,197,1,30);
  wall12 .shapeColor = "yellow";
  //wall12.setAnimation("wall");
  wall12.scale = 3;
  wall13 = createSprite(1090,247,80,1);
  wall13.shapeColor = "yellow";
  //wall13.setAnimation("wall");
  wall13.scale = 3;
  wall14 = createSprite(970,315,30,1);
  wall14.shapeColor = "yellow";
  //wall14.setAnimation("animation_2");
  wall14.scale = 4.5;
  wall14.rotation = 90;
  wall15 = createSprite(1050,330,1,40);
  wall15.shapeColor = "yellow";
  //wall15.setAnimation("wall");
  wall15.scale = 4;
  wall15.rotation = 90;
  wall16 = createSprite(1000, 440,70,1);
  wall16.shapeColor = "yellow";
  //wall16.setAnimation("animation_2");
  wall16.scale = 3;
  wall17 = createSprite(895, 340,50,1);
  wall17.shapeColor = "yellow";
//  wall17.setAnimation("wall");
  wall17.scale = 4;
  wall17.rotation = 90;
  wall18 = createSprite(725, 567,200,1);
  wall18.shapeColor = "yellow";
  //wall18.setAnimation("animation_2");
  wall18.scale = 3;
  wall19 = createSprite(1150, 570,1,30);
  wall19.shapeColor = "yellow";
  //wall19.setAnimation("wall");
  wall19.scale = 3;
  wall20 = createSprite(1237, 510,1,40);
  wall20.shapeColor = "yellow";
  //wall20.setAnimation("wall");
  wall20.scale = 2.5;
  wall20.rotation = 90;
  wall21 = createSprite(863, 510,1,40);
  wall21.shapeColor = "yellow";
  //wall21.setAnimation("wall");
  wall21.scale = 3;
  wall21.rotation = 90;
  //htygb::::::::::::::::::::
  wall22 = createSprite(922, 510,10,1);
  wall22.shapeColor = "yellow";
  //wall22.setAnimation("wall");
  wall22.scale = 3;
  wall22.rotation = 90;
  wall23 = createSprite(500, 230,1,80);
  wall23.shapeColor = "white";
//  wall23.setAnimation("wall");
  wall23.scale = 3;
  wall23.rotation = 90;
  wall24 = createSprite(620, 275,1,30);
  wall24.shapeColor = "white";
  //wall24.setAnimation("wall");
  wall24.scale = 3;
  wall25 = createSprite(380, 275,1,30);
  wall25.shapeColor = "white";
//  wall25.setAnimation("wall");
  wall25.scale = 3;
  wall26 = createSprite(500,320,1,60);
  wall26.shapeColor = "white";
  //wall26.setAnimation("animation_2");
  wall26.scale = 4;
  wall26.rotation = 90;
  wall27 = createSprite(1150, 75,50,1);
  wall27.shapeColor = "yellow";
//  wall27.setAnimation("wall");
  wall27.scale = 3;
  wall28 = createSprite(755, 355,1,60);
  wall28.shapeColor = "yellow";
  //wall28.setAnimation("wall");
  wall28.scale = 3;
  wall29 = createSprite(690, 355,1,103);
  wall29.shapeColor = "yellow";
  //wall29.setAnimation("animation_2");
  wall29.scale = 4;
  wall29.rotation = 90;
  wall30 = createSprite(790, 275,50,1);
  wall30.shapeColor = "yellow";
  //wall30.setAnimation("wall");
  wall30.scale = 3;
  wall31 = createSprite(640, 523,1,70);
  wall31.shapeColor = "yellow";
  //wall31.setAnimation("wall");
  wall31.scale = 3;
  wall32 = createSprite(350,575,1,80);
  wall32.shapeColor = "yellow";
  //wall32.setAnimation("wall");
  wall32.scale = 3;
  wall33 = createSprite(300, 543,60,1);
  wall33.shapeColor = "yellow";
  //wall33.setAnimation("wall");
  wall33.scale = 3;
  wall34 = createSprite(770,200,1,20);
  wall34.shapeColor = "yellow";
  //wall34.setAnimation("wall");
  wall34.scale = 3.7;
  wall34.rotation = 90;
  wall35 = createSprite(705, 165,1,15);
  wall35.shapeColor = "yellow";
  //wall35.setAnimation("wall");
  wall35.scale = 3.7;
  wall35.rotation = 90;
  wall36 = createSprite(734, 181,1,10);
  wall36.shapeColor = "yellow";
  //wall36.setAnimation("animation_1");
  wall36.scale = 3.4;
  wall37 = createSprite(195,355,1,107);
  wall37.shapeColor = "yellow";
 // wall37.setAnimation("animation_2");
  wall37.scale = 2.5;
  wall37.rotation = 90;
  wall38 = createSprite(105, 457,150,1);
  wall38.shapeColor = "yellow";
  //wall38.setAnimation("animation_2");
  wall38.scale = 2.5;
  wall38.rotation = 90;
  wall39 = createSprite(265, 379,70,1);
  wall39.shapeColor = "yellow";
  //wall39.setAnimation("wall");
  wall39.scale = 2.5;
  wall39.rotation = 90;
  wall40 = createSprite(385, 92,1,15);
  wall40.shapeColor = "yellow";
  //wall40.setAnimation("animation_2");
  wall40.scale = 3.5;
  wall41 = createSprite(1200,200,1,50);
  wall41.shapeColor = "yellow";
  //wall41.setAnimation("animation_2");
  wall41.scale = 3.8;
  wall42 = createSprite(545, 470,1,40);
  wall42.shapeColor = "yellow";
  //wall42.setAnimation("wall");
  wall42.scale = 2.5;
  wall42.rotation = 90;
  wall43 = createSprite(545,520,37,1);
  wall43.shapeColor = "yellow";
  //wall43.setAnimation("wall");
  wall43.scale = 2.5;
  wall43.rotation = 90;
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  wall44 = createSprite(1190,425,30,1);
  wall44.shapeColor = "yellow";
  //wall44.setAnimation("wall");
  wall44.scale = 2.5;
  wall44.rotation = 90;

}

function draw(){
background("black");
if(keyDown("D")){
  pacman.velocityX = 5;
  pacman.velocityY = 0;
  pacman.addImage(pacmanImage);
}
if(keyWentUp("D")){
   pacman.velocityX = 0;
   pacman.velocityY = 0;
}
if(keyDown("A")){
  pacman.velocityX =-5;
  pacman.velocityY = 0;
  pacman.addImage(pacmanLeft)
}
if(keyWentUp("A")){
  pacman.velocityX = 0;
  pacman.velocityY = 0;
}
if(keyDown("S")){
  pacman.velocityX = 0;
  pacman.velocityY = 5;
}
if(keyWentUp("S")){
  pacman.velocityX = 0;
  pacman.velocityY = 0;
}

if(keyDown("W")){
  pacman.velocityX = 0;
  pacman.velocityY =-5;
}
if(keyWentUp("W")){
  pacman.velocityX = 0;
  pacman.velocityY = 0;
}
if(pacman.isTouching(wall1) || pacman.isTouching(wall2)||pacman.isTouching(wall3)|| pacman.isTouching(wall4)||pacman.isTouching(wall5)||pacman.isTouching(wall6)||pacman.isTouching(wall7) || pacman.isTouching(wall8)||
pacman.isTouching(wall9)||pacman.isTouching(wall10)||pacman.isTouching(wall11)||pacman.isTouching(wall12)||pacman.isTouching(wall13)||pacman.isTouching(wall14)||pacman.isTouching(wall15)||pacman.isTouching(wall16)||pacman.isTouching(wall17)||
pacman.isTouching(wall18)||pacman.isTouching(wall19)||pacman.isTouching(wall20)||pacman.isTouching(wall21)||pacman.isTouching(wall22)||pacman.isTouching(wall23)||pacman.isTouching(wall24)||pacman.isTouching(wall25)||
pacman.isTouching(wall26)||pacman.isTouching(wall27)||pacman.isTouching(wall28)||pacman.isTouching(wall29)||pacman.isTouching(wall30)||pacman.isTouching(wall31)||pacman.isTouching(wall32)||pacman.isTouching(wall33)||pacman.isTouching(wall34)||
pacman.isTouching(wall35)||pacman.isTouching(wall36)||pacman.isTouching(wall37)||pacman.isTouching(wall38)||pacman.isTouching(wall39)||pacman.isTouching(wall40)||pacman.isTouching(wall41)||pacman.isTouching(wall42)||pacman.isTouching(wall43)||
pacman.isTouching(wall44)|| pacman.isTouching(k1)|| pacman.isTouching(k2)|| pacman.isTouching(k3)|| pacman.isTouching(k4)|| pacman.isTouching(k5)|| pacman.isTouching(k6)|| pacman.isTouching(k7)|| pacman.isTouching(k8)|| pacman.isTouching(k9)|| 
pacman.isTouching(k10)){

  pacman.velocityX = 0;
  pacman.velocityY = 0;
  ghost1.velocityX = 0;
  ghost1.velocityY = 0;
  ghost2.velocityX = 0;
  ghost2.velocityY = 0;
  ghost3.velocityY = 0;
  ghost3.velocityX = 0;
  ghost4.velocityX = 0;
  ghost4.velocityY = 0;
  ghost5.velocityX = 0;
  ghost5.velocityY = 0;
  ghost6.velocityY = 0;
  ghost6.velocityX = 0;
  gameOver = createSprite(652,330,1304,661);
  gameOver.addImage(gameOverImage);
  
}

if (pacman.isTouching(award)){
  youWin = createSprite(652,330,1304,661);
  youWin.addImage(youWinImage);
  pacman.velocityX = 0;
  pacman.velocityY = 0;
  ghost1.velocityX = 0;
  ghost1.velocityY = 0;
  ghost2.velocityX = 0;
  ghost2.velocityY = 0;
  ghost3.velocityY = 0;
  ghost3.velocityX = 0;
  ghost4.velocityX = 0;
  ghost4.velocityY = 0;
  ghost5.velocityX = 0;
  ghost5.velocityY = 0;
  ghost6.velocityY = 0;
  ghost6.velocityX = 0;

 
}

/*if(ghost2.bounceOff(wall1)){
  ghost2.velocityX = -5;
  ghost2.velocityY = 2;
}

if(ghost2.bounceOff(wall2)){
  ghost2.velocityY = 5;
  ghost2.velocityX = 0;
}

if(ghost2.bounceOff(wall3)){
  ghost2.velocityY = -5;
  ghost2.velocityX = 0;
}

if(ghost2.bounceOff(wall4)){
  ghost2.velocityX = 5;
  ghost2.velocityY = 0;
}*/
ghost1.velocityY = pacman.velocityY;
ghost2.velocityY = pacman.velocityY;
ghost3.velocityX = pacman.velocityX;
ghost4.velocityY = pacman.velocityY;
ghost5.velocityX = pacman.velocityX;
ghost6.velocityY = pacman.velocityY;

ghost1.bounceOff(wall1);
ghost1.bounceOff(wall2);
ghost1.bounceOff(wall3);
ghost1.bounceOff(wall4);



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         


ghost2.bounceOff(wall1);
ghost2.bounceOff(wall2);
ghost2.bounceOff(wall3);
ghost2.bounceOff(wall4);




ghost3.bounceOff(wall1);
ghost3.bounceOff(wall2);
ghost3.bounceOff(wall3);
ghost3.bounceOff(wall4);



ghost4.bounceOff(wall1);
ghost4.bounceOff(wall2);
ghost4.bounceOff(wall3);
ghost4.bounceOff(wall4);

ghost5.bounceOff(wall1);
ghost5.bounceOff(wall2);
ghost5.bounceOff(wall3);
ghost5.bounceOff(wall4);

ghost6.bounceOff(wall1);
ghost6.bounceOff(wall2);
ghost6.bounceOff(wall3);
ghost6.bounceOff(wall4);

  /*ghost1.velocityx = 5;
  ghost1.velocityx =-5;
  ghost1.velocityY = 5;
  ghost1.velocityY =-5;

  /*ghost2.velocityx = 5;
  ghost2.velocityx =-5;
  ghost2.velocityY = 5;
  ghost2.velocityY =-5;



  ghost3.velocityx = 5;
  ghost3.velocityx =-5;
  ghost3.velocityY = 5;
  ghost3.velocityY =-5;

  ghost4.velocityx = 5;
  ghost4.velocityx =-5;
  ghost4.velocityY = 5;
  ghost4.velocityY =-5;

  ghost5.velocityx = 5;
  ghost5.velocityX =-5;
  ghost5.velocityY = 5;
  ghost5.velocityY =-5;

  ghost6.velocityx = 5;
  ghost6.velocityx =-5;
  ghost6.velocityY = 5;
  ghost6.velocityY =-5;

  if(ghost6.isTouching(wall1)){
    ghost6.velocityY = -3;
  }
  

  if(pacman.isTouching(ghost1) || pacman.isTouching(ghost2) || pacman.isTouching(ghost3) ||pacman.isTouching(ghost4)||pacman.isTouching(ghost5)||pacman.isTouching(ghost6)){

  }
  //https://www.youtube.com/watch?v=wq5h_hluhBU 33:35


 
 











pacman.bounceOff(wall1);
pacman.bounceOff(wall2);
pacman.bounceOff(wall3);
pacman.bounceOff(wall4);
pacman.bounceOff(wall5);
pacman.bounceOff(wall6);
pacman.bounceOff(wall7);
pacman.bounceOff(wall8);
pacman.bounceOff(wall9);
pacman.bounceOff(wall10);
pacman.bounceOff(wall11);
pacman.bounceOff(wall12);
pacman.bounceOff(wall13);
pacman.bounceOff(wall14);
pacman.bounceOff(wall15);
pacman.bounceOff(wall16);
pacman.bounceOff(wall17);
pacman.bounceOff(wall18);
pacman.bounceOff(wall19);
pacman.bounceOff(wall20);
pacman.bounceOff(wall21);
pacman.bounceOff(wall22);
pacman.bounceOff(wall23);
pacman.bounceOff(wall24);
pacman.bounceOff(wall25);
pacman.bounceOff(wall26);
pacman.bounceOff(wall27);
pacman.bounceOff(wall28);
pacman.bounceOff(wall29);
pacman.bounceOff(wall30);
pacman.bounceOff(wall31);
pacman.bounceOff(wall32);
pacman.bounceOff(wall33);
pacman.bounceOff(wall34);
pacman.bounceOff(wall35);
pacman.bounceOff(wall36);
pacman.bounceOff(wall37);
pacman.bounceOff(wall38);
pacman.bounceOff(wall39);
pacman.bounceOff(wall40);
pacman.bounceOff(wall41);
pacman.bounceOff(wall42);
pacman.bounceOff(wall43);
pacman.bounceOff(wall44);*/
drawSprites();
}

