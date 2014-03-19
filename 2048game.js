// WRITE the board for twos here.
// 4X4 board
// 16 spaces
// random generate in an array of 16 2 or 4
// if numbers touch they add

window.onload = function(){ init()}

function init(){
  board = createBoard();
  var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  for(var i=0; i <times.length; i++){
    piece = createPieces()
    board.gameArray.push(piece)
  }
  startGame(board)
};



startGame = function(board){
  board.propogate()
  board.addnumber()
}


GameBoard.prototype = {
  propogate: function(){
    console.log("propogating")
  },
  addnumber: function(){
    console.log("adding num")
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
