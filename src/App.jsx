import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Marchant from "./pages/Marchant";
import Events from "./pages/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchants" element={<Marchant />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
