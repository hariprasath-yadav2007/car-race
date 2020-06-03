class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("game start",120,100);
    Player.getplayerinfo();
    console.log(allPlayers);
    if(allPlayers !== undefined){
      var dp = 130;
      for(var plr in allPlayers){
        dp = dp+20;
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,dp);
      }
     
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance+20;
      player.update();
    }
  }
}
