import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { ChatModule } from '../chat/chat.module';
import { ChatNGRXModule } from '../chat-ngrx/chat-ngrx.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    ChatModule,
  ],
  exports: [],
  declarations: [
    PageComponent
  ],
  providers: [],
})
export class PageModule { }
