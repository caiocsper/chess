import Piece from './Piece';
import { generateVerticalOrHorizontalMoveset, generateDiagonalMoveset } from '../../Helpers/movesetGenerator.helper';

export default class King extends Piece {
  public type = 'Rei';

  get availableMoves() {
    const upwardMoveset = generateVerticalOrHorizontalMoveset(this, { single: true });
    const downwardMoveset = generateVerticalOrHorizontalMoveset(this, { single: true, down: true });
    const rightwardMoveset = generateVerticalOrHorizontalMoveset(this, { single: true, vertical: true });
    const leftwardMoveset = generateVerticalOrHorizontalMoveset(this, { single: true, vertical: true, down: true });
    const rightUpwardMoveset = generateDiagonalMoveset(this, { single: true });
    const rightDownwardMoveset = generateDiagonalMoveset(this, { single: true, down: true });
    const leftUpwardMoveset = generateDiagonalMoveset(this, { single: true, left: true });
    const leftDownwardMoveset = generateDiagonalMoveset(this, { single: true, left: true, down: true });

    return [
      ...rightwardMoveset,
      ...leftwardMoveset,
      ...upwardMoveset,
      ...downwardMoveset,
      ...rightUpwardMoveset,
      ...rightDownwardMoveset,
      ...leftUpwardMoveset,
      ...leftDownwardMoveset,
    ];
  }
}
