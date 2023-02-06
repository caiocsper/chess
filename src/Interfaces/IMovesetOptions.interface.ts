interface IMovesetOptions {
  down?: boolean;
  single?: boolean;
}

export interface IHorizontalOrVerticalMovesetOptions extends IMovesetOptions {
  vertical?: boolean;
}

export interface IDiagonalMovesetOptions extends IMovesetOptions {
  left?: boolean;
}

export interface IKnightMovesetOptions extends Omit<IMovesetOptions, 'single'> {
  left?: boolean;
}
