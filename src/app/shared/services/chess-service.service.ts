import { Injectable } from '@angular/core';
import { CHESS_TYPE_ENUM } from '../enums/chess.enums';
import { Board } from '../models/board.model';
import { ChessPiece } from '../models/chess.model';
import { CHESS_BACKGROUND_TYPE } from '../types/chess.types';

@Injectable({
  providedIn: 'root',
})
export class ChessServiceService {
  constructor() {}

  public setBoardToInitialChessPosition(): Board {
    let boardModel: Board = Board.getNewObject();

    Array(8)
      .fill('toto')
      .map((_self, indexParent) =>
        Array(8)
          .fill('go')
          .map((_self, indexChild) => {
            let background: CHESS_BACKGROUND_TYPE = null;
            /**
             * if index of row is even, then
             * if index of chess piece is even then background 'white' else background 'green'
             *
             * second case, if index of row is odd, then
             * if index of chess piece is even then background 'green', else 'white'
             */
            if (indexParent % 2 === 0) {
              background = indexChild % 2 === 0 ? '#EEEED2' : '#769656';
            } else {
              background = indexChild % 2 === 0 ? '#769656' : '#EEEED2';
            }

            boardModel.pieces.push(
              new ChessPiece(
                null,
                String.fromCharCode(indexChild + 65),
                (8 - indexParent).toString(),
                `${String.fromCharCode(indexChild + 65)}${8 - indexParent}`,
                null,
                background,
                null
              )
            );
          })
      );

    boardModel.pieces.forEach((piece, index) => {
      let type: keyof typeof CHESS_TYPE_ENUM | null = null;
      let imgSrc = null;
      let team: 'white' | 'black' | null = null;
      if (['A8', 'H8', 'A1', 'H1'].includes(piece.position)) {
        type = 'TOWER';
      }
      if (['B8', 'G8', 'B1', 'G1'].includes(piece.position)) {
        type = 'HORSERIDER';
      }
      if (['C8', 'F8', 'C1', 'F1'].includes(piece.position)) {
        type = 'FOOL';
      }
      if (['D8', 'D1'].includes(piece.position)) {
        type = 'QUEEN';
      }
      if (['E8', 'E1'].includes(piece.position)) {
        type = 'KING';
      }
      if (['7', '2'].includes(piece.y)) {
        type = 'PAWN';
      }
      team = index <= 15 ? 'black' : index >= 48 ? 'white' : null;
      piece.imgSrc = `/assets/images/${team}_${type?.toLowerCase()}.png`;
      piece.type = type;
      piece.team = team;
    });

    return boardModel;
  }
}
