function createGame(points) {
    let score=0;
    return{
        increaseScore: function(points){
            score+=points;
            console.log('Addition = '+score);
    }
}
}
const game=createGame();
game.increaseScore(5);

// Creation Phase
/* FunctionExecutionContext={
    LexicalEnvironment:{
    type:"Declarative",
    score: undefined 
    type:"Object",
    increaseScore = increaseScore(){}
    }
    outert:"GCE",
    thisBending:"createGame()"
},
//increaseScore()
LexicalEnvironment:{
    type:
    }
    outert:"createGame()",
    thisBending:"increaseScore()"

/*
//Execution Phase
/* FunctionExecutionContext={
    LexicalEnvironment:{
    type:"Declarative",
    score: 0; 
    type:"Object",
    increaseScore = increaseScore(){.....}
    }
    outert:"GCE",
    thisBending:"createGame()"
},
increaseScore()
LexicalEnvironment:{
    type:
    }
    outert:"createGame()",
    thisBending:"increaseScore()"


 */