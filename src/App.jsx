import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import CharCreate from "./Pages/CharCreate/CharCreate";
import BuildCalculator from "./Pages/BuildCalculator/BuildCalculator";
import ItemCalculator from "./Pages/ItemCalculator/ItemCalculator";
import CraftSystem from "./Pages/CraftSystem/CraftSystem";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <>
     <div className="app">
      <BrowserRouter>
      <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CharCreate" element={<CharCreate />} />
          <Route path="/BuildCalculator" element={<BuildCalculator />} />
          <Route path="/ItemCalculator" element={<ItemCalculator />} />
          <Route path="/CraftSystem" element={<CraftSystem />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
     </div>
    </>
  );
};

export default App;
