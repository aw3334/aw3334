/* Amanda Warkow
   CS 375
   Homework 2
   July 3, 2020
*/

/* takes in a 2d array, row number and col number
   returns false if r, c is outside of array scope
   returns false if cell at r, c is dead(false)
   returns true if cell is live */
function isLive(arr, r, c) {
  if (r < 0 || r > (arr.length - 1) || c < 0 || c > (arr[0].length - 1)) {
    return false;
  } else if (!arr[r][c]) {
    return false;
  } else {
    return true;
  }
}

/* takes a 2d array, row and col number for a cell
   calculates the location of the cell's neighbors
   checks if each neighbor is alive and adds to liveNeighbors if yes
   returns true or false depending on # of live neighbors
    and rules of conway's game */
function checkCell(arr, cellR, cellC) {
  var liveNeighbors = 0;
  var neighbors = [];
  var upperRight = [cellR - 1, cellC + 1];
  neighbors.push(upperRight);
  var upperLeft = [cellR - 1, cellC - 1];
  neighbors.push(upperLeft);
  var upper = [cellR - 1, cellC];
  neighbors.push(upper);
  var lower = [cellR + 1, cellC];
  neighbors.push(lower);
  var lowerRight = [cellR + 1, cellC + 1];
  neighbors.push(lowerRight);
  var lowerLeft = [cellR + 1, cellC - 1];
  neighbors.push(lowerLeft);
  var right = [cellR, cellC + 1];
  neighbors.push(right);
  var left = [cellR, cellC - 1];
  neighbors.push(left);

  for (n in neighbors) {
    if (isLive(arr, neighbors[n][0], neighbors[n][1])) {
      liveNeighbors++;
    }
  }

  if (arr[cellR][cellC]) {
    if (liveNeighbors === 2 || liveNeighbors === 3) {
      return true;
    } else {
      return false;
    }
  } else {
      if (liveNeighbors === 3) {
        return true;
      } else {
        return false;
      }
  }
}


/* takes a 2d array
   returns board if it is undefined or empty
   newBoard is created and values are added based on
    value returned from checkCell 
   after looping through the dimensions of the board, 
    newBoard is returned */
function stepBoard(board) {
  if (board === undefined || board.length < 1) {
    return board;
  }

  var newBoard = [];

  for (i = 0; i < board.length; i++) {
    newBoard[i] = [];
    for (j = 0; j < board[0].length; j++) {
      newBoard[i][j] = checkCell(board, i, j);
    }
  }
  return newBoard;
}

