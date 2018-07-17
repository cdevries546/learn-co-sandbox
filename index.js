//let=var
let winArr = [
  ["#0-0", "#1-0", "#2-0"], // top row
["#0-1", "#1-1", "#2-1"], //middle row
["#0-2", "#1-2", "#2-2"],//bottom row
["#0-0", "#0-1", "0-2"], //first column
["#1-0", "#1-1", "#1-2"], //second column
["#2-0", "#2-1", "#2-2"], //third column
["#0-0", "#1-1", "#2-2"],  //1st diagonial
["#2-0", "#1-1", "#0-2"], //2nd diagonial
]
 
	
let mark = 'X'

function listenForClicksOnCell(){
  $('.cell').click(markCell)
}
	
listenForClicksOnCells()

function markCell(){
  if (!this.innerText) {
    this.innerText = mark
    if (playerWon(mark)) {
      alert("You won the game!")
    }
    mark = (mark==='X') ?'O':'X'
  }
}
	
function elementContains(id, mark) {
  return $(id).text() === mark
}


function playerWon (mark) {
  for (let i = 0 ; i < winArr.length; i++) {
    let winCombo = winArr[i]
    let won = winCombo.every(id => elementContains(id,mark))
    if (won) return true
}
}

return false

function resetGame() {
  
}

function listenForClicksOnMessage(){
  
}
