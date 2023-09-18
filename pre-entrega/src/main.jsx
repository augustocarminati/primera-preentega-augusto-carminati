import React from 'react'
import {initializeApp} from 'firebase/app';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyDmF7L69Sk5svW8TEuWnu3hQRwSxqy0cR8",
  authDomain: "entrega-final-coderreact.firebaseapp.com",
  projectId: "entrega-final-coderreact",
  storageBucket: "entrega-final-coderreact.appspot.com",
  messagingSenderId: "579331846836",
  appId: "1:579331846836:web:b56127b4b1464e291cdde1",
};
//const firebaseConfig = {
//  apiKey: import.meta.env.VITE_REACT_APP_apiKey,
//  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
//  projectId: import.meta.env.VITE_REACT_APP_projectId,
//  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
//  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
//  appId: import.meta.env.VITE_REACT_APP_appId,
//};


initializeApp(firebaseConfig);



console.log("Initializing")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  </React.StrictMode>
);

