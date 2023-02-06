import { TBoardSquare } from '../Types/TBoard.types';

export default function isInList(targetSquare: TBoardSquare, squareList: TBoardSquare[]): boolean {
  return squareList.some((square) => JSON.stringify(square) === JSON.stringify(targetSquare));
}

/* {
    for (let position of positionList)
        if (targetPosition[0] === position[0] && targetPosition[1] === position[1]) return true;
    return false;
}; */