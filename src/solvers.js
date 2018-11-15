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
  // iterate through board
  // toggle piece 
    // call row helper
    // call col helper
  // 
  // var len = n;
  // var resultsArray = [];
  // for (var row = 0; row < len; row++) {
  //   for (var col = 0; col < len; col++) {
  //     var board = new Board({'n': n});
  //     var count = 0;
  //     board.togglePiece(row, col);
  //     count++;
  //     if (n === 1) {
  //       resultsArray.push(board.rows());
  //     }
  //     for (var newRow = row + 1; newRow < len; newRow++) {
  //       for (var newCol = 0; newCol < len; newCol++) {
  //         if (newRow !== row && newCol !== col) {
  //           board.togglePiece(newRow,newCol);
  //         }
  //         if (board.hasRowConflictAt(newRow)) {
  //           board.togglePiece(newRow, newCol);
  //         } else if (board.hasColConflictAt(newCol)) {
  //           board.togglePiece(newRow, newCol);
  //         }
  //         if (board.rows()[newRow][newCol] === 1) {
  //           count++;
  //           if (count === n) {
  //             resultsArray.push(board.rows());
  //             break;
  //           }
  //           break;
  //         }
  //         if (count === n) {
  //           resultsArray.push(board.rows());
  //           break;
  //         }
  //       }
  //       if (count === n) {
  //         break;
  //       }
  //     }
  //   }
  // }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));

// window.findNRooksSolution = function(n) {
//   var resultsArr = [];
//   var counter = 0;
//   var board = new Board({'n': n});
//   var row = 0;
//   var col = 0;
  
//       //Iterate through rows set equal to row
//       //Iterate through columns set equal to col
//         //togglePiece()
//           //Check if any rook conflicts(row/column)
//             //If there's a conflict, toggle back to 0;
//             // If there isnt any conflict
//               //Feed current board back into placePiece
//               // increment counter
  
//   var placePiece = function(currentBoard, row, col) {
//     if (counter !== n) {
//       for (var newRow = row; newRow < n; newRow++) {
//         for (var newCol = 0; newCol < n; newCol++) {
//           currentBoard.togglePiece(newRow, newCol);
//           if (currentBoard.hasRowConflictAt(newRow) || currentBoard.hasColConflictAt(newCol)) {
//             currentBoard.togglePiece(newRow, newCol);
//           } else {
//             counter++;
//             if (counter === n) {
//               var answer = _.map(currentBoard.rows(), (el) => el.slice());
//               resultsArr.push(answer);
//               currentBoard.togglePiece(newRow, newCol);
//               counter--;
//               break;
//             }
//             placePiece(currentBoard, newRow + 1, newCol);
//             currentBoard.togglePiece(newRow, newCol);
//             counter--;
//           }
//         }
//         if (counter === n) {
//           break;
//         }
//       }
//     }
//   }
  
//   placePiece(board, row, col);
//   return resultsArr[0];
// };

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var solutionsArray = findNRooksSolution(n);
//   console.log(solutionsArray);
//   var solutionCount = solutionsArray.length; //fixme

//   // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

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
