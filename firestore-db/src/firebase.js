import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAahHZBMoPR_uggh9txFcVcoAq5ZPQqhyY",
  authDomain: "app-b9260.firebaseapp.com",
  databaseURL: "https://app-b9260-default-rtdb.firebaseio.com",
  projectId: "app-b9260",
  storageBucket: "app-b9260.firebasestorage.app",
  messagingSenderId: "915585003629",
  appId: "1:915585003629:web:f069df45282b316e5c4f64"
};

export const app = initializeApp(firebaseConfig);