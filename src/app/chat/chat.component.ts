import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Renderer2, Inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat, UsersChat } from './chat.model';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../shared/services/config.service';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  chats: Chat[] = [];
  activeChat: UsersChat;
  usersChat: UsersChat[] = [];
  activeChatUser: string;
  activeChatUserImg: string;
  loggedInUserImg: string;
  newMessage = '';
  searchQuery = '';
  placement = 'bottom-right';
  isContentOverlay = false;

  public config: any = {};
  layoutSub: Subscription;

  messages = new Array();
  message = '';
  currentUser = '';
  item = 0;

  constructor(public socket: Socket,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private configService: ConfigService, private cdr: ChangeDetectorRef,
              private chatService: ChatService) {
    this.config = this.configService.templateConf;
    this.usersChat = chatService.usersChat;
    this.activeChat = chatService.usersChat.find(_ => _.isActiveChat);
    this.chats = this.activeChat.chats;
    this.activeChatUser = this.activeChat.name;
    this.activeChatUserImg = this.activeChat.avatar;
    this.loggedInUserImg = 'assets/img/portrait/small/avatar-s-1.png';
    this.renderer.addClass(this.document.body, 'chat-application');
  }

  ngOnInit(): void {
    this.socket.connect();

    const name = `user-${new Date().getTime()}`;
    this.currentUser = name;
    this.socket.emit('set-name', name);
    this.chatService.listen('listen-message').subscribe((data: any) => {
      const momento = new Date(data.createdAt).toLocaleString();
      this.chats.push({
        isReceived: true,
        time: '',
        messages: [data.message],
        messageType: 'text'
      });
    });
  }


  ngOnDestroy() {

    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }

    this.renderer.removeClass(this.document.body, 'chat-application');
    this.socket.disconnect();
  }

  // send button function calls
  onAddMessage() {
    if (this.newMessage !== '') {
      this.chatService.emit('send-message', this.newMessage);
      this.newMessage = '';
    }
  }

  viewChat(chat: UsersChat) {

    // tslint:disable-next-line: no-shadowed-variable
    this.usersChat.forEach(chat => {
      if (chat.userId === this.activeChat.userId) {
        chat.isActiveChat = true;
      }
    });

    this.activeChat = chat;
    this.activeChat.isActiveChat = true;
    this.chats = this.activeChat.chats;
    this.activeChatUser = this.activeChat.name;
    this.activeChatUserImg = this.activeChat.avatar;
    this.isContentOverlay = false;
  }
}
