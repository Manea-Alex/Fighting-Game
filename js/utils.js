function rectangularCollision({rectangle1, rectangle2})
{
        //checks if the right side of the player attackbox is greater or equal to the left side of the enemy
       let hit =  rectangle1.attackBox.position.x +
         rectangle1.attackBox.width
          >= rectangle2.position.x
        //checks if the left side of the player attackbox is less or equal  than the right side of the enemy
        && 
        rectangle1.attackBox.position.x
         <= rectangle2.position.x 
         + rectangle2.width 

        &&
        //checks if the bottom position of the players attack box is greater than the starting position of
        //enemy s attack box
        rectangle1.attackBox.position.y 
        + rectangle1.attackBox.height 
        >= rectangle2.position.y
        //top side of player attack box is smaller than the bottom side of the enemy attackbox
        && rectangle1.attackBox.position.y
         <=rectangle2.position.y
          + rectangle2.height
      
     return hit
}

function determineWinner({player,enemy, timerId})
{
    clearTimeout(timerId) //stops the time
     document.querySelector("#displayText").style.display = 'flex'
    if(player.health === enemy.health)
    {
        console.log('tie')
        document.querySelector("#displayText").innerHTML = 'Tie'
        
    }
    else if(player.health >enemy.health){
         document.querySelector("#displayText").innerHTML = 'Player 1 wins'
         console.log("Enemy health is ",enemy.health, "Player health is ",player.health)
        
    }
    else if(player.health < enemy.health){
    
    document.querySelector("#displayText").innerHTML = 'Player 2 wins'
    }


}


let timer = 60
let timerId
function decreaseTimer(){
//Decreasing timer and dsiplaying who wins by the 
//amount of health left
   
    if(timer > 0)
    {
        timerId = setTimeout(decreaseTimer,1000)
        timer--
        document.querySelector("#timer").innerHTML = timer
    }
    if(timer === 0){
        determineWinner({player,enemy,timerId})
    }
}
