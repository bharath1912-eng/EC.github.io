function createGame(points) {
    let score=0;
    return{
        increaseScore: function(points){
            score+=points;
            console.log('Addition = '+score);
         },
         decreaseScore: function(points){
            score-=points;
            console.log('Subtraction = '+score);
         },
         multiplyScore: function(points) {
            score *=points;
            console.log('Multiplication = '+score);
         },
         getScore(){
            return score;
         }
    }
}
const game=createGame();
game.increaseScore(5);
game.decreaseScore(1);
game.multiplyScore(6);
console.log('Final = '+ game.getScore());

