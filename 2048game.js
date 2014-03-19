// WRITE the board for twos here.
// 4X4 board
// 16 spaces
// random generate in an array of 16 2 or 4
// if numbers touch they add

window.onload = function(){ init()}

function init(){
  board = createBoard();
  for(var i=0; i < 16; i++){
    piece = createPieces()
    board.gameArray.push(piece)
  }
  window.addEventListener("keyup", function(){ userMove(event, board)})
  startGame(board)
};

startGame = function(board){
  board.propogate()
  board.addnumber()
  board.printboard()
}

userMove = function(event, board){
  if(event.keyCode == 38) {
    tileMove.up(board);
    addTile.up(board);
  } else if(event.keyCode == 40) {
    tileMove.down(board);
    addTile.down(board);
  } else if(event.keyCode == 37) {
    tileMove.left(board);
    addTile.left(board);
  } else if (event.keyCode == 39) {
    tileMove.right(board);
    addTile.right(board);
  }
}

tileMove = function(){
  this.type ="mover"
}

addTile = function(){
  this.type = "tiler"
}

addTile.up = function(board){
  var array = []
  for(i = 0; i < board.gameArray.length; i++){
      array.push(board.gameArray[i].value)
  };
  function include(array, object){
    return (array.indexOf(object) != -1)
  }
};

addTile.down = function(){
  console.log('addin tiles movin down')
}
addTile.left = function(){
  console.log('addin tiles movin left')
}
addTile.right = function(){
  console.log('addin tiles movin right')
}

tileMove.up = function(){
  console.log('movin up in the world')
}

tileMove.down = function(){
  console.log('movin down in the world')
}

tileMove.left= function(){
  console.log('movin left in the world')
}

tileMove.right = function(){
  console.log('movin right in the world')
}

GameBoard.prototype = {
  propogate: function(){
    console.log("propogating")
  },
  addnumber: function(){
    console.log("adding num")
  },
  printboard: function(){
    for (i = 0; i < this.gameArray.length; i++){
      if(this.gameArray[i].value == 0){$("#box").append("<div id='"+i+"' class='cell'></div>")}
      else{ $('#box').append("<div id='"+ i + "' class='cell'>" +this.gameArray[i].value + "</div>")} // document.getElementsByTagName("h1").appendChild("<h1>"+this.gameArray +"</h1>")}
    }
  }
}

//gameboard model
function GameBoard(){
  this.gameArray = []
}
function BoardPiece(){
  this.value = 0
}

createPieces = function(){
  return new BoardPiece();
}

createBoard = function(){
  return new GameBoard();
}
