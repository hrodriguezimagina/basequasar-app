// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
importScripts('/service-worker.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const initializingFirebaseApp = async () => {
    try {       

			firebase.initializeApp({
				apiKey: "AIzaSyC0jZzyqpnCAGGlppuEFwSkGJQ8uxEtwVU",
				authDomain: "testing-b14e2.firebaseapp.com",
				projectId: "testing-b14e2",
				storageBucket: "testing-b14e2.firebasestorage.app",
				messagingSenderId: "539434867063",
				appId: "1:539434867063:web:ebc44c047d339d8e00e972",
				measurementId: "G-BG0KGGDVBP"
			});    
    
			// Retrieve an instance of Firebase Messaging so that it can handle background
			// messages.
			const messaging = firebase.messaging();

			onBackgroundMessage(messaging, (payload) => {
				console.log('[firebase-messaging-sw.js] Received background message ', payload);
				// Customize notification here
				const notificationTitle = 'Background Message Title';
				const notificationOptions = {
						body: 'Background Message body.',
						icon: '/firebase-logo.png'
				};

				self.registration.showNotification(notificationTitle,
						notificationOptions);
			});

    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

self.addEventListener('install', (event) => {
    event.waitUntil(initializingFirebaseApp());
});
