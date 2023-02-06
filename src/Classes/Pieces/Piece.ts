import Board from '../Board';
import isInList from '../../Helpers/checkPosition.helper';
import { TBoardSquare } from '../../Types/TBoard.types';

export default abstract class Piece {
  public abstract type: string;

  protected _position: TBoardSquare;

  constructor(position: TBoardSquare, readonly board: Board) {
    this._position = position;
  }

  get position() { return this._position; }
  abstract get availableMoves(): TBoardSquare[];

  move(newPosition: TBoardSquare): void {
    if (!isInList(newPosition, this.availableMoves)) {
      console.log('MOVIMENTO IMPOSSÍVEL');
      return;
    }
    console.log(`MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`);
    this._position = newPosition;
  }
}