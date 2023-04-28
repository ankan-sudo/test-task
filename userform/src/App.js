import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Userform from "./components/Userform";
import Datatables from "./components/Datatables";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Userform />} />
          <Route path="/userlist" element={<Datatables />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
