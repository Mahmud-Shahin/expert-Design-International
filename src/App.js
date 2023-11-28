import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import Footer from "./pages/Shared/Footer";

import ContactUs from "./pages/ContactUS/ContactUs";
import Prices from "./pages/Prices/Prices";
import ClippingPath from "./pages/ClippingPath/ClippingPath";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/prices" element={<Prices></Prices>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/clippingpath"
          element={<ClippingPath></ClippingPath>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
