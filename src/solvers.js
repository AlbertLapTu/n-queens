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



window.findNRooksSolution = function(n) {
  // var solution = new Board({'n': n});
  /*
    - Given a value n, when placed on that row, all values after that n index will not be counted
      - All values in the given column[index] below the n value will also not be counted
    
  */
  // iterate through board
  // toggle piece 
    // call row helper
    // call col helper
  // 
  var len = n;
  var resultsArray = [];
  for (var row = 0; row < len; row++) {
    for (var col = 0; col < len; col++) {
      var board = new Board({'n': n});
      var count = 0;
      board.togglePiece(row, col);
      for (var newRow = row; newRow < len; newRow++) {
        for (var newCol = col; newCol < len; newCol++) {
          if (newRow !== row && newCol !== col) {
            board.togglePiece(newRow,newCol);
          }
          if (board.hasRowConflictAt(newRow)) {
            board.togglePiece(newRow, newCol);
          } else if (board.hasColConflictAt(newCol)) {
            board.togglePiece(newRow, newCol);
          }
          if (board.rows()[newRow][newCol] === 1) {
            count++;
          }
          if (count === n) {
            resultsArray.push(board.rows());
          }
        }
      }
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return resultsArray;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionsArray = findNRooksSolution(n);
  console.log(solutionsArray);
  var solutionCount = solutionsArray.length; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
