export const calculateWinner = (squares) => {
  // all winning combinations
  const lines = [
    [0, 1, 2], // first row
    [3, 4, 5], // second row
    [6, 7, 8], // last row
    [0, 3, 6], // first column
    [1, 4, 7], // second column
    [2, 5, 8], // third column
    [0, 4, 8], // top-left diagonal
    [2, 4, 6], // top-right diagonal
  ];
  for (let i = 0; i < lines.length; i++) {
    // array destructuring
    const [a, b, c] = lines[i];
    // if there's a value and first value === second value and first value === third value,
    // then the first value wins; otherwise return null
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const squares = [null, null, null, "X", "X", "0", null, null, null];
