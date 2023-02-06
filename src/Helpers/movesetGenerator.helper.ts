import Board from '../Classes/Board';
import Piece from '../Classes/Pieces/Piece';
import { IDiagonalMovesetOptions, IHorizontalOrVerticalMovesetOptions } from '../Interfaces/IMovesetOptions.interface';
import { TBoardSquare } from '../Types/TBoard.types';
import isInList from './checkPosition.helper';

export function generateDiagonalMoveset({ board, position }: Piece, options?: IDiagonalMovesetOptions): TBoardSquare[] {
  const [columnVal, rowVal] = position;
  const [boardColumns, boardRows] = Board.getColumnsAndRows();

  if (options?.left) boardColumns.reverse();
  if (options?.down) boardRows.reverse();

  const columnNextIndex: number = boardColumns.indexOf(columnVal) + 1;
  const columnBoundary: number = boardColumns.length - columnNextIndex;

  const rowNextIndex: number = boardRows.indexOf(rowVal) + 1;
  const rowBoundary: number = boardRows.length - rowNextIndex;

  const nearestBoundary: number = columnBoundary < rowBoundary ? columnBoundary : rowBoundary;
  const availableSquares: TBoardSquare[] = [];

  for (let i = 0; i < nearestBoundary; i++) {
    const square: TBoardSquare = [boardColumns[columnNextIndex + i], boardRows[rowNextIndex + i]];

    if (isInList(square, board.occupiedSquares)) break;
    availableSquares.push(square);
    if (options?.single) break;
  }

  return availableSquares;
}

export function generateVerticalOrHorizontalMoveset({ board, position }: Piece, options?: IHorizontalOrVerticalMovesetOptions): TBoardSquare[] {
  const [columnVal, rowVal] = position;
  const [boardColumns, boardRows] = Board.getColumnsAndRows();

  if (options?.down) {
    boardColumns.reverse();
    boardRows.reverse();
  }

  const boardColumnOrRowCurrentIndex: number = options?.vertical ? boardColumns.indexOf(columnVal) : boardRows.indexOf(rowVal);

  const boardBoundary: number = boardRows.length;
  const availableSquares: TBoardSquare[] = [];

  for (let i = boardColumnOrRowCurrentIndex + 1; i < boardBoundary; i++) {
    const square: TBoardSquare = options?.vertical ? [boardColumns[i], rowVal] : [columnVal, boardRows[i]];

    if (isInList(square, board.occupiedSquares)) break;
    availableSquares.push(square);
    if (options?.single) break;
  }

  return availableSquares;
}