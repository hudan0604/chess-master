import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardLayoutComponent } from './pages/board-layout/board-layout.component';

const routes: Routes = [
  { path: '**', redirectTo: 'board' },
  { path: '', pathMatch: 'full', redirectTo: 'board' },
  { path: 'board', component: BoardLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
