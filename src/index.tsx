import React from "react";
import ReactDOM from "react-dom/client";
import Overview from "./components/pages/Overview";
import Details from './components/pages/Details/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Overview />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
