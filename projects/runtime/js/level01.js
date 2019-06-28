var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
               {type: 'laser',x:1200, y:groundY -140},
                {type: 'laser',x:1900, y:groundY -140},
                {type: 'laser',x:2400, y:groundY -140},
                {type: 'lava',x:1500, y:groundY -0},
                {type: 'lava',x:2500, y:groundY -0},
                {type: 'lava',x:3500, y:groundY -0},
                {type: 'lava',x:4500, y:groundY -0},
                {type: 'saber',x:1600, y:groundY -140},
                {type: 'saber',x:2700, y:groundY -140},
                {type: 'saber',x:900, y:groundY -140},
                {type: 'star' , x: 1500, y:groundY -135},
                {type: 'star' , x: 600, y: groundY -135},
                {type: 'star' , x: 2400, y:groundY -135},
                {type: 'star' , x: 3600, y:groundY -135}
            
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
         
        //laser code
    
    function createLavaBlock(x,y) {
           //lava block code
        var hitZoneSize = 35;
        var damageFromObstacle = 10;   
        var myLava = game.createObstacle(hitZoneSize,damageFromObstacle);
        myLava.x = x;
        myLava.y = y;
        game.addGameItem(myLava);
        var obstacleImage = draw.bitmap('img/lava.png');
        myLava.addChild(obstacleImage);
        obstacleImage.x =-31;
        obstacleImage.y = -30;
    }
        function createLaserBeam(x,y) {
    // your code goes here
         var hitZoneSize = 35;
         var damageFromObstacle = 10;
         var myLaser = game.createObstacle(hitZoneSize,damageFromObstacle);
         myLaser.x = x;
         myLaser.y = y;
         game.addGameItem(myLaser);
         var obstacleImage = draw.bitmap('img/laser.png');
         myLaser.addChild(obstacleImage);
         obstacleImage.x = -55;
         obstacleImage.y = -36;
         if (myLaser.x === 0) {
            myLaser.x = 2500;
         }
}  
   function createSaber(x,y) {
    // your code goes here
         var hitZoneSize = 20;
         var damageFromObstacle = 10;
         var mySaber = game.createObstacle(hitZoneSize,damageFromObstacle);
         mySaber.x = x;
         mySaber.y = y;
         game.addGameItem(mySaber);
         var obstacleImage = draw.bitmap('img/saber.png');
         mySaber.addChild(obstacleImage);
         obstacleImage.x = -20;
         obstacleImage.y = -5;
         if (mySaber.x === 0) {
            mySaber.x = 2500;
        }
}

  function createStar(x,y) {
    // your code goes here
         var hitZoneSize = 50;
         var damageFromObstacle = 10;
         var myStar = game.createObstacle(hitZoneSize,damageFromObstacle); 
         myStar.x = x;
         myStar.y = y;
         game.addGameItem(myStar);
         var starImage = draw.bitmap('img/star.png');
         myStar.addChild(starImage);
         starImage.x = -50;
         starImage.y = -50;
         myStar.velocityX = -1;
         if (myStar.x === -50) {
            myStar.x = 2500;
        }
         myStar.onPlayerCollision = function(){
             console.log('halle has collected a star!');
             game.increaseScore(1000);
             game.changeIntegrity(20);
             myStar.fadeOut();
    }
         
  }
         
//this creates laser and lava based on if then statement.
 for (var i = 0; i < levelData.gameItems.length; i++) {
    var eachValue = levelData.gameItems[i];
    
    if (eachValue.type === "laser") {
        createLaserBeam(eachValue.x, eachValue.y);
    }
    else if (eachValue.type === "lava"){
        createLavaBlock(eachValue.x, eachValue.y);
    }
    else if (eachValue.type === "star") {
        createStar(eachValue.x, eachValue.y);
    }  
    else {
        createSaber(eachValue.x,eachValue.y);
    }
    
    // eachValue = createLavaBlock([0]);
    // if (gameItems < 10){
    //     createLavaBlock(0 ,0);
    // };
    //dont uncomment these u can refresh the page thingy
   // gameItems = levelData.gameItems[i];
    //gameItems = createLavaBlock(1500,390);
   // gameItems =  createLaserBeam(1900,298);
    
    // Create a sawblade using the .x and .y property of each game item object
}
 //enemy
 function createEnemy(x,y){
var enemy =  game.createGameItem('enemy',25);
    var redSquare = draw.bitmap('img/saturn1.png');
    redSquare.x = -48;
    redSquare.y = -18;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -3;
if (enemy.x === -50) {
    enemy.x = 2500;
}
// enemy.rotationalVelocity(10);
//you die here
enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-50);
    
};
enemy.onProjectileCollision = function() {
    console.log('halle hit enemy');
    game.increaseScore(100);
    enemy.fadeOut();
    
};
}
createEnemy(500, groundY-50);
createEnemy(1000, groundY-50);
createEnemy(1500, groundY-50);
createEnemy(2000, groundY-50);
createEnemy(2500, groundY-50);
createEnemy(3000, groundY-50);









    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
};