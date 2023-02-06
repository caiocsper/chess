import Board from './Classes/Board';
import Piece from './Classes/Pieces/Piece';

let piece: Piece;

const board = new Board();
console.log(board);

const logPieceInfo = (piece: Piece) => {
  console.log(
    `----------------------
Peça: ${piece.type}
Posição: ${piece.position}
Movimentos disponíveis: ${piece.availableMoves.map(
    (b) => `[${b}]`,
  )
}
Posições ocupadas no tabuleiro: ${board.occupiedSquares}`,
  );
};

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);

piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);

piece = board.pieces[2];
logPieceInfo(piece);
piece.move(['F', '3']);

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);

/*
Saída:
<ref *1> Board {
  pieces: [
    Pawn { board: [Circular *1], _position: [Array], type: 'Peão' },
    Rook { board: [Circular *1], _position: [Array], type: 'Torre' }
  ]
}
----------------------
Peça: Peão
Posição: C,2
Movimentos disponíveis: [C,3]
Posições ocupadas no tabuleiro: C,2,F,1
MOVENDO Peão DA CASA C,2 PARA A CASA C,3
----------------------
Peça: Torre
Posição: F,1
Movimentos disponíveis: [F,2],[F,3],[F,4],[F,5],[F,6],[F,7],[F,8],[G,1],[H,1],[E,1],[D,1],[C,1],[B,1],[A,1]
Posições ocupadas no tabuleiro: C,3,F,1
MOVENDO Torre DA CASA F,1 PARA A CASA F,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Torre DA CASA F,3 PARA A CASA A,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
----------------------
Peça: Peão
Posição: C,3
Movimentos disponíveis: [C,4]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Peão DA CASA C,3 PARA A CASA C,4
----------------------
Peça: Peão
Posição: C,4
Movimentos disponíveis: [C,5]
Posições ocupadas no tabuleiro: C,4,F,3
MOVENDO Peão DA CASA C,4 PARA A CASA C,5
----------------------
Peça: Peão
Posição: C,5
Movimentos disponíveis: [C,6]
Posições ocupadas no tabuleiro: C,5,F,3
MOVENDO Peão DA CASA C,5 PARA A CASA C,6
----------------------
Peça: Peão
Posição: C,6
Movimentos disponíveis: [C,7]
Posições ocupadas no tabuleiro: C,6,F,3
MOVENDO Peão DA CASA C,6 PARA A CASA C,7
----------------------
Peça: Peão
Posição: C,7
Movimentos disponíveis: [C,8]
Posições ocupadas no tabuleiro: C,7,F,3
MOVENDO Peão DA CASA C,7 PARA A CASA C,8
----------------------
Peça: Peão
Posição: C,8
Movimentos disponíveis:
Posições ocupadas no tabuleiro: C,8,F,3
*/