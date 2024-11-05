// ECHO is on.
// src/firebase-messaging-sw.js
// importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js');

// Import the Firebase scripts


importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBK2fnED4v4IkOLcjMH7CA5kMLm3lZKWHg",
  authDomain: "emrgency-alert.firebaseapp.com",
  projectId: "emrgency-alert",
  storageBucket: "emrgency-alert.firebasestorage.app",
  messagingSenderId: "806670823752",
  appId: "1:806670823752:web:40d47f36bdc05534c3c37d",
  measurementId: "G-GP8X8LBJPB"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();



// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: '/firebase-logo.png', // Path to your notification icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
