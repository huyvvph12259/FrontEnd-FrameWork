import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDBFMu6HlDZLlUeQQrLAL1kV1r_YSha9uI",
    authDomain: "update-53ca5.firebaseapp.com",
    projectId: "update-53ca5",
    storageBucket: "update-53ca5.appspot.com",
    messagingSenderId: "118632130351",
    appId: "1:118632130351:web:2b9ff4ec523830094aa3da",
    measurementId: "G-TWF0J16EH3"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase