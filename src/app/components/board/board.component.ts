import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/shared/models/board.model';
import { ChessServiceService } from 'src/app/shared/services/chess-service.service';

@Component({
  selector: 'chess-master-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: Board = Board.getNewObject();

  constructor(public chessService: ChessServiceService) {}

  ngOnInit(): void {
    console.log('board', this.board);
  }
}
