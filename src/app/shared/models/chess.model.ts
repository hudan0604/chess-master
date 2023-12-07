import { CHESS_TYPE_ENUM } from '../enums/chess.enums';
import { CHESS_BACKGROUND_TYPE } from '../types/chess.types';

export class ChessPiece {
  constructor(
    public team: 'white' | 'black' | null,
    public x: string,
    public y: string,
    public position: string,
    public type: keyof typeof CHESS_TYPE_ENUM | null,
    public background: CHESS_BACKGROUND_TYPE,
    public imgSrc: string | null
  ) {}
}
