/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Enemies from "./pages/Enemies";
import TeamBuilder from "./pages/Teambuilder/TeamBuilder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/enemies" element={<Enemies />} />
          <Route path="/teambuilder" element={<TeamBuilder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
