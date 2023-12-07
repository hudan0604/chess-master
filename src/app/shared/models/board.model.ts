import { ChessPiece } from './chess.model';

export class Board {
  constructor(
    public teamTurnToPlay: 'white' | 'black',
    public pieces: Array<ChessPiece>
  ) {}

  public static getNewObject(): Board {
    return new Board('white', []);
  }
}
