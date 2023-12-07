import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardLayoutComponent } from './pages/board-layout/board-layout.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, BoardLayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
