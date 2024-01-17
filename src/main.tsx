import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Router} from "./Router.tsx";
import {Navbar} from "./Navbar.tsx";
import {BrowserRouter} from "react-router-dom";
import {BoardIndex} from "./BoardIndex.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Navbar />
      <BrowserRouter>
          <div className="row">
              <div className="col-2">
                  <BoardIndex />
              </div>
              <div className="col-10">
                  <Router />
              </div>
          </div>

      </BrowserRouter>
  </React.StrictMode>,
)
