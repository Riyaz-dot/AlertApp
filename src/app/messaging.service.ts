// messaging.service.ts

import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../environment';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private messaging;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.messaging = getMessaging(app);
  }

  requestPermission() {
    return Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        return getToken(this.messaging, { vapidKey: environment.firebase.vapidKey });
      } else {
        console.warn('Notification permission denied');
        return null;
      }
    });
  }

  listenForMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('Message received. ', payload);
      // Handle the message payload
    });
  }
}
