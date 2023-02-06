import Piece from './Piece';
import { TBoardSquare } from '../../Types/TBoard.types';
import { generateVerticalOrHorizontalMoveset } from '../../Helpers/movesetGenerator.helper';

export default class Pawn extends Piece {
  public type = 'Peão';

  get availableMoves(): TBoardSquare[] {
    const upwardMoveset = generateVerticalOrHorizontalMoveset(this, { single: true });

    return [...upwardMoveset];
  }
}