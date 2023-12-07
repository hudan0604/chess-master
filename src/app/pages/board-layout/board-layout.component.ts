import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/shared/models/board.model';
import { ChessServiceService } from 'src/app/shared/services/chess-service.service';

@Component({
  selector: 'chess-master-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss'],
})
export class BoardLayoutComponent implements OnInit {
  public board: Board = Board.getNewObject();

  constructor(public chessService: ChessServiceService) {}

  ngOnInit(): void {
    this.board = this.chessService.setBoardToInitialChessPosition();
  }
}
