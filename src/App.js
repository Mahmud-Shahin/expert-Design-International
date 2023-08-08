import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import { NavbarDefault } from "./pages/Shared/NavbarDefault";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavbarDefault></NavbarDefault>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
