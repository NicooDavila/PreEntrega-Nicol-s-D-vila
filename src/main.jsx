import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDuKQFUcM1PCxteHLT7W-j-mTzBRPr7Fp4",
  authDomain: "gymempire-37f24.firebaseapp.com",
  projectId: "gymempire-37f24",
  storageBucket: "gymempire-37f24.appspot.com",
  messagingSenderId: "986224556202",
  appId: "1:986224556202:web:432562b2a33840d12ef8d3"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
    
    />
  </React.StrictMode>,
)
