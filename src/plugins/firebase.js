import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  })
}

export async function getTokenFirebase() {
  try {
    requestPermission()

    const firebaseConfig = {
      apiKey: "AIzaSyC0jZzyqpnCAGGlppuEFwSkGJQ8uxEtwVU",
      authDomain: "testing-b14e2.firebaseapp.com",
      projectId: "testing-b14e2",
      storageBucket: "testing-b14e2.firebasestorage.app",
      messagingSenderId: "539434867063",
      appId: "1:539434867063:web:ebc44c047d339d8e00e972",
      measurementId: "G-BG0KGGDVBP"
    };

    const fireBaseKey = "BKduc-2XFPje0-98e7S3bQrX3LNImn2RcpmmuszBOAz6J-aSRe8J2V8Ved15h3KwDAAphbUObA_jMYVTnaSSyd0"    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Cloud Messaging and get a reference to the service
    const messaging = getMessaging(app);
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);      
    } );  

    getToken(messaging, {vapidKey: fireBaseKey}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ');
        console.log(currentToken);
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    })

  } catch (error) {
      console.error('Error fetching data:', error);
  };
}

