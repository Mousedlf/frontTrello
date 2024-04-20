import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Router} from "./Router.tsx";
import {Navbar} from "./Navbar.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Navbar />
      <BrowserRouter>


                  <Router />


      </BrowserRouter>
  </React.StrictMode>,
)
