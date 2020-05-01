class Game{
    constructor(){
     }
getState(){
var gameStateRef = database.ref('GameState');
gameStateRef.on("value", function(data){
    gameState = data.val();
}) 
  }
  update(state){
      database.ref('/').update({
        gameState: state
      });
  }
  async start(){
      if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('PlayerCount').once("value");
          if(playerCountRef.exist()){
            PlayerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form();
          form.display();
      }
  }

 play(){
     form.hide();
     textSize(30);
     text("Game Start",120,100);
     player.getPlayerInfo();
     if(allPlayers !== undefined){
         var displayPosition = 130;
         for(var Plr in allPlayers){
          if(Plr === "player" + player.index){
            fill("red");
          else
          fill("black");
          displayPosition += 20;
          textSize(15);
          text(allPlayers[Plr].name + ":" + allPlayers[Plr].distance, 120, displayPosition);  
            } 
         }

         if(keyIsDown(UP_ARROW) && player.index !== null){
             player.distance += 50
             player.update();
         }

     }
 }

 

