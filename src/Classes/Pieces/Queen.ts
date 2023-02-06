import Piece from './Piece';
import { generateVerticalOrHorizontalMoveset, generateDiagonalMoveset } from '../../Helpers/movesetGenerator.helper';

export default class Queen extends Piece {
  public type = 'Rainha';

  get availableMoves() {
    const upwardMoveset = generateVerticalOrHorizontalMoveset(this);
    const downwardMoveset = generateVerticalOrHorizontalMoveset(this, { down: true });
    const rightwardMoveset = generateVerticalOrHorizontalMoveset(this, { vertical: true });
    const leftwardMoveset = generateVerticalOrHorizontalMoveset(this, { vertical: true, down: true });
    const rightUpwardMoveset = generateDiagonalMoveset(this);
    const rightDownwardMoveset = generateDiagonalMoveset(this, { down: true });
    const leftUpwardMoveset = generateDiagonalMoveset(this, { left: true });
    const leftDownwardMoveset = generateDiagonalMoveset(this, { left: true, down: true });

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
