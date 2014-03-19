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
  window.addEventListener("keyup", function(){ keyBoard(event, board)})
  startGame(board)
};



startGame = function(board){
  board.propogate()
  board.addnumber()
  board.printboard()
}

keyBoard = function(event, board){
  if(event.keyCode == 38) {
    console.log("38 up")
  } else if(event.keyCode == 40) {
    console.log("40 down")
  } else if(event.keyCode == 37) {
    console.log("37 left")
  } else if (event.keyCode == 39) {
    console.log("39 right")
  }
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
      console.log(this)
      $('h1').append("<div>" + this.gameArray[i].value + "</div>") // document.getElementsByTagName("h1").appendChild("<h1>"+this.gameArray +"</h1>")
    }
    $('body').contents().wrapAll('<div class="board">')
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
