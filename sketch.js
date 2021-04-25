var PLAY = 1;
																										  
var END = 0;
var gameState = PLAY;


var path, boy;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection;
var cashG, diamondsG, jwelleryG, swordGroup;
var end, endImg;

var PLAY = 1;
																										  
var END = 0;
var gameState = PLAY;


var path, boy;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection;
var cashG, diamondsG, jwelleryG, swordGroup;
var end, endImg;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  // Moving background
  path = createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(width/2, height-20, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.08;

				 
  
										 
					
  end = createSprite(width-600, 170, 400, 20);
  end.addAnimation("end_Image", endImg);
  end.scale = .5
  end.visible = false;


					  
											
										
			   
  
  
  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

  treasureCollection = 0;
}

function draw() {

					   
  background(0);
  boy.x = World.mouseX;
  text("Text :" + treasureCollection, 500, 50);


  edges = createEdgeSprites();
  boy.collide(edges);

  if (gameState === PLAY) {
    if (path.y > height) {
      path.y = height/2;
    }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      cashG.destroyEach();
												 
	 
    } else if (diamondsG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      diamondsG.destroyEach();

	  
    } else if (jwelleryG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      jwelleryG.destroyEach();

	  
    } else {
      if (swordGroup.isTouching(boy)) {
        gameState = END;
        swordGroup.destroyEach();
        jwelleryG.destroyEach();
        diamondsG.destroyEach();
					   
					  
		
        cashG.destroyEach();
        end.visible = true;
        path.destroy();
        boy.destroy();

      }

									  
									   
	 
    }
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
   

}

function createCash() {
  if (frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (frameCount % 310 == 0) {
    var diamonds = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
}
 

function createJwellery() {
  if (frameCount % 410 == 0) {
    var jwellery = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (frameCount % 520 == 0) {
    var sword = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  // Moving background
  path = createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(width/2, height-20, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.08;

				 
  
										 
					
  end = createSprite(width-200, 170, 400, 20);
  end.addAnimation("end_Image", endImg);
  end.scale = .5
  end.visible = false;


					  
											
										
			   
  
  
  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

  treasureCollection = 0;
}

function draw() {

					   
  background(0);
  boy.x = World.mouseX;
  text("Text :" + treasureCollection, 500, 50);


  edges = createEdgeSprites();
  boy.collide(edges);

  if (gameState === PLAY) {
    if (path.y > height) {
      path.y = height/2;
    }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      cashG.destroyEach();
												 
	 
    } else if (diamondsG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      diamondsG.destroyEach();

	  
    } else if (jwelleryG.isTouching(boy)) {
      treasureCollection = treasureCollection + 1;
      jwelleryG.destroyEach();

	  
    } else {
      if (swordGroup.isTouching(boy)) {
        gameState = END;
        swordGroup.destroyEach();
        jwelleryG.destroyEach();
        diamondsG.destroyEach();
					   
					  
		
        cashG.destroyEach();
        end.visible = true;
        path.destroy();
        boy.destroy();

      }

									  
									   
	 
    }
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
   

}

function createCash() {
  if (frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 250;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (frameCount % 310 == 0) {
    var diamonds = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 250;
    diamondsG.add(diamonds);
  }
}
 

function createJwellery() {
  if (frameCount % 410 == 0) {
    var jwellery = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 250;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (frameCount % 520 == 0) {
    var sword = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 250;
    swordGroup.add(sword);
  }
}