import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store.jsx'
import { Provider } from 'react-redux'
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate  from 'react-alert-template-basic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const server = "https://orderit-backend.onrender.com/";
// export const server = "http://localhost:4000/";


const option = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...option}>
      <App />
    </AlertProvider>
  </Provider>,
)
