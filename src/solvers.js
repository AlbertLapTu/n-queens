/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

  // var solution = new Board({'n': n});
  /*
    - Given a value n, when placed on that row, all values after that n index will not be counted
      - All values in the given column[index] below the n value will also not be counted
  */
  
  // var placePiece = function(currentBoard, row, col) {
  //   if (counter !== n) {
  //     for (var newRow = row; newRow < n; newRow++) {
  //       for (var newCol = 0; newCol < n; newCol++) {
  //         currentBoard.togglePiece(newRow, newCol);
  //         if (currentBoard.hasRowConflictAt(newRow) || currentBoard.hasColConflictAt(newCol)) {
  //           currentBoard.togglePiece(newRow, newCol);
  //         } else {
  //           counter++;
  //           if (counter === n) {
  //             var answer = _.map(currentBoard.rows(), (el) => el.slice());
  //             resultsArr.push(answer);
  //             currentBoard.togglePiece(newRow, newCol);
  //             counter--;
  //             break;
  //           }
  //           placePiece(currentBoard, newRow + 1, newCol);
  //           currentBoard.togglePiece(newRow, newCol);
  //           counter--;
  //         }
  //       }
  //       if (counter === n) {
  //         break;
  //       }
  //     }
  //   }
  // }
  
  // placePiece(board, row, col);
  // return resultsArr[0];

window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({'n': n});
  var counter = 0;
  
  var toggler = function(row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      counter++;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
        counter--; 
      } else if (counter === n) {
        solution = _.map(board.rows(), el => el.slice());
      } else {
        toggler(row + 1);
        board.togglePiece(row, col);
        counter--;
      }
    }
  }
  
  toggler(0);
  
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var counter = 0;
  
  var toggler = function(row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      counter++;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
        counter--; 
      } else if (counter === n) {
        solutionCount++;
        board.togglePiece(row, col);
        counter--;
      } else {
        toggler(row + 1);
        board.togglePiece(row, col);
        counter--;
      }
    }
  }
  
  toggler(0);
  
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var board = new Board({'n': n});
  var counter = 0;
  if (n === 0 || n === 2 || n === 3) {
    return _.map(board.rows(), el => el.slice());
  }
  var toggler = function(row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      counter++;
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
        counter--; 
      } else if (counter === n) {
        solution = _.map(board.rows(), el => el.slice());
      } else {
        toggler(row + 1);
        board.togglePiece(row, col);
        counter--;
      }
    }
  }
  toggler(0);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var counter = 0;
  if (n === 0) {
    return 1;
  } else if (n === 2 || n === 3) {
    return 0;
  }
  
  var toggler = function(row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      counter++;
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
        counter--; 
      } else if (counter === n) {
        solutionCount++;
        board.togglePiece(row, col);
        counter--;
      } else {
        toggler(row + 1);
        board.togglePiece(row, col);
        counter--;
      }
    }
  }
  
  toggler(0);
  
  return solutionCount;
};
