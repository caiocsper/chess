import Piece from './Piece';
import { generateVerticalOrHorizontalMoveset } from '../../Helpers/movesetGenerator.helper';

export default class Rook extends Piece {
  public type = 'Torre';

  get availableMoves() {
    const upwardMoveset = generateVerticalOrHorizontalMoveset(this);
    const downwardMoveset = generateVerticalOrHorizontalMoveset(this, { down: true });
    const rightwardMoveset = generateVerticalOrHorizontalMoveset(this, { vertical: true });
    const leftwardMoveset = generateVerticalOrHorizontalMoveset(this, { vertical: true, down: true });

    return [
      ...rightwardMoveset,
      ...leftwardMoveset,
      ...upwardMoveset,
      ...downwardMoveset,
    ];
  }
}