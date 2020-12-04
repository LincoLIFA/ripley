import { Injectable } from '@angular/core';
import { Chat, UsersChat } from './chat.model';

@Injectable()
export class ChatService {

  constructor() { }

  public chat1: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat2: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat3: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat4: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat5: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat6: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];
  public chat7: Chat[] = [
    new Chat(
      false,
      '',
      [
        'How can we help? We are here for you!'
      ],
      'text'),
    new Chat(
      true,
      '',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 9 bootstrap compatible.'
      ]
      , 'text'),
    new Chat(
      false,
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 9 bootstrap admin template.'
      ]
      , 'text'),
    new Chat(
      true,
      '1 hour ago',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ]
      , 'text'),
    new Chat(
      false,
      '',
      [
        'Thanks, from ThemeForest.'
      ]
      , 'text'),
    new Chat(
      true,
      '',
      [
        'I will purchase it for sure.',
        'Thanks.'
      ]
      , 'text'),
  ];

  public usersChat: UsersChat[] = [
    {
      userId: '3',
      name: 'Sarah Woods',
      avatar: 'assets/img/portrait/small/avatar-s-8.png',
      lastChatTime: '2:14 AM',
      status: 'away',
      isPinnedUser: false,
      isMuted: true,
      unreadMessageCount: '12',
      isActiveChat: true,
      lastChatMessage: 'Hello John!',
      chats: this.chat3
    }
  ];





}
