import Board from '../Board';
import Piece from './Piece';
import isInList from '../../Helpers/checkPosition.helper';
import { IKnightMovesetOptions } from '../../Interfaces/IMovesetOptions.interface';
import { TBoardSquare } from '../../Types/TBoard.types';
import TKnightMoves from '../../Types/TKnight.types';

export default class Knight extends Piece {
  public type = 'Cavalo';

  get availableMoves() {
    const rightUpMoveset = this.generateKnightMoveset(2, 1);
    const upRightMoveset = this.generateKnightMoveset(1, 2);
    const rightDownMoveset = this.generateKnightMoveset(2, 1, { down: true });
    const downRightMoveset = this.generateKnightMoveset(1, 2, { down: true });
    const leftUpMoveset = this.generateKnightMoveset(2, 1, { left: true });
    const upLeftMoveset = this.generateKnightMoveset(1, 2, { left: true });
    const leftDownMoveset = this.generateKnightMoveset(2, 1, { left: true, down: true });
    const downLeftMoveset = this.generateKnightMoveset(1, 2, { left: true, down: true });

    return [
      ...rightUpMoveset,
      ...upRightMoveset,
      ...rightDownMoveset,
      ...downRightMoveset,
      ...leftUpMoveset,
      ...upLeftMoveset,
      ...leftDownMoveset,
      ...downLeftMoveset,
    ];
  }

  private generateKnightMoveset(horizontalMove: TKnightMoves, verticalMove: TKnightMoves, options?: IKnightMovesetOptions): TBoardSquare[] {
    const { position: [columnVal, rowVal] } = this;
    const [boardColumns, boardRows] = Board.getColumnsAndRows();

    if (options?.left) boardColumns.reverse();
    if (options?.down) boardRows.reverse();

    const columnNextIndex: number = boardColumns.indexOf(columnVal) + verticalMove;
    const columnBoundary: number = boardColumns.length - columnNextIndex;

    const rowNextIndex: number = boardRows.indexOf(rowVal) + horizontalMove;
    const rowBoundary: number = boardRows.length - rowNextIndex;

    if (columnBoundary <= 0 || rowBoundary <= 0) return [];

    const square: TBoardSquare = [boardColumns[columnNextIndex], boardRows[rowNextIndex]];

    return isInList(square, this.board.occupiedSquares) ? [] : [square];
  }
}
