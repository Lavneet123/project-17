var PLAY = 1;
var END = 0;
var Gamestate = PLAY
var score = 0



function preload()
{
  swordImage = loadImage("sword.png")
  fruitImage1 = loadImage("fruit1.png")
  fruitImage2 = loadImage("fruit2.png")
  fruitImage3 = loadImage("fruit3.png")
  fruitImage4 = loadImage("fruit4.png")
  enemieImage1 =loadImage("alien2.png")
  GameoverImage = loadImage("gameover.png")
  Gameoversound = loadSound("gameover.mp3")
  knifesound = loadSound("knifeSwooshSound.mp3")
}


function setup()
{
  createCanvas(400,400)
  sword = createSprite(50,250,25,25)
  sword.addImage("sword",swordImage)
  sword.scale = 0.6
  
  fruitGroup = new Group();
  enemieGroup = new Group();
  
}


function draw()
{
  background("blue")
  if(Gamestate===PLAY)
    {
     sword.x = World.mouseX
     sword.y = World.mouseY

     fruits();
     enemies();

     if(fruitGroup.isTouching(sword))
       {
         fruitGroup.destroyEach();
         knifesound.play()
         score = score+2
    }
  else if(enemieGroup.isTouching(sword))
      {
        Gamestate = END
        fruitGroup.destroyEach();
        Gameoversound.play()
         enemieGroup.destroyEach();
        fruitGroup.setVelocityXEach(0)
        enemieGroup.setVelocityXEach(0)
        sword.addImage(GameoverImage)
        sword.x =200
        sword.y=200
      }
    }  
  
  drawSprites()
  text("SCORE: "+ score,300,20)
}


function fruits()
{
  if (frameCount % 100===0)
    {
      fruit = createSprite(400,200,15,15)
      pos = Math.round(random(1,2))
      if(pos===1)
        {
          fruit.x = (400)
          fruit.velocityX = -6
        }
   else if(pos===2)
     {
       fruit.x=(0)
       fruit.velocityX = 6
     }
      
      num = Math.round(random(1,4))
      switch(num)
        {
          case 1:fruit.addImage("f1",fruitImage1)
                break;
          case 2:fruit.addImage("f2",fruitImage2)
                break;
          case 3:fruit.addImage("f3",fruitImage3)
                break;
          case 4:fruit.addImage("f4",fruitImage4)
                break;
          default:break
            
        }
          fruit.scale =0.2
      
      fruit.y = Math.round(random(100,300))
            
      fruitGroup.add(fruit)      
        }
}
  
  function enemies()
  {
    if(frameCount % 400===0)
      {
        enemie= createSprite(400,200,10,10)
       enemie.addImage("a2",enemieImage1)
       enemie.y = Math.round(random(100,300))
       enemie.velocityX = -7
       enemie.scale = 0.5
        
        enemieGroup.add(enemie)
      }
    
    
  }








