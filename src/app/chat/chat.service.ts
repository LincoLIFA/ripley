import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Chat, UsersChat } from './chat.model';

@Injectable()
export class ChatService {

  constructor(public socket: Socket) {
    this.socket.connect();
  }

  public chat1: Chat[] = [];

  public usersChat: UsersChat[] = [
    {
      userId: '3',
      name: 'Asistente de Ripley',
      avatar: 'assets/img/portrait/small/avatar-s-8.png',
      lastChatTime: '2:14 AM',
      status: 'away',
      isPinnedUser: false,
      isMuted: true,
      unreadMessageCount: '12',
      isActiveChat: true,
      lastChatMessage: '',
      chats: this.chat1
    }
  ];

  listen(eventName: string) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data) => {
        Subscriber.next(data);
      });
    });
  }


  emit(eventName: string, data: any) {
    this.chat1.push({
      isReceived: false,
      time: '',
      messages: [data],
      messageType: 'text'
    });
    this.socket.emit(eventName, data);
  }
}
