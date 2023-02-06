import isInList from '../Helpers/checkPosition.helper';
import King from './Pieces/King';
import Knight from './Pieces/Knight';
import Pawn from './Pieces/Pawn';
import Piece from './Pieces/Piece';
import Queen from './Pieces/Queen';
import Rook from './Pieces/Rook';
import { TBoardColumn, TBoardRow, TBoardSquare } from '../Types/TBoard.types';

export default class Board {
  public pieces: Piece[] = [];

  private static boardColumns: TBoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  private static boardRows: TBoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  constructor() {
    this.addPiece(new Pawn(['C', '2'], this));
    this.addPiece(new Rook(['F', '1'], this));
    this.addPiece(new Queen(['D', '3'], this));
    this.addPiece(new King(['E', '3'], this));
    this.addPiece(new Knight(['A', '1'], this));
  }

  static getColumnsAndRows(): [TBoardColumn[], TBoardRow[]] {
    const boardColumns = [...Board.boardColumns];
    const boardRows = [...Board.boardRows];

    return [boardColumns, boardRows];
  }

  private addPiece(piece: Piece): void {
    if (isInList(piece.position, this.occupiedSquares)) return;

    this.pieces.push(piece);
  }

  get occupiedSquares(): TBoardSquare[] {
    return this.pieces.map((piece) => piece.position);
  }
}