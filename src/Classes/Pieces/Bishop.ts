import Piece from './Piece';
import { generateDiagonalMoveset } from '../../Helpers/movesetGenerator.helper';

export default class Bishop extends Piece {
  public type = 'Bispo';

  get availableMoves() {
    const rightUpwardMoveset = generateDiagonalMoveset(this);
    const rightDownwardMoveset = generateDiagonalMoveset(this, { down: true });
    const leftUpwardMoveset = generateDiagonalMoveset(this, { left: true });
    const leftDownwardMoveset = generateDiagonalMoveset(this, { left: true, down: true });

    return [
      ...rightUpwardMoveset,
      ...rightDownwardMoveset,
      ...leftUpwardMoveset,
      ...leftDownwardMoveset,
    ];
  }
}