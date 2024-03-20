

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import CharCreate from "./Pages/CharCreate/CharCreate";
import BuildCalculator from "./Pages/BuildCalculator/BuildCalculator";
import ItemCalculator from "./Pages/ItemCalculator/ItemCalculator";
import CraftSystem from "./Pages/CraftSystem/CraftSystem";


const App = () => {
 

  return (
    <>
     <div className="app">
      <BrowserRouter>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CharCreate" element={<CharCreate />} />
          <Route path="/BuildCalculator" element={<BuildCalculator />} />
          <Route path="/ItemCalculator" element={<ItemCalculator />} />
          <Route path="/CraftSystem" element={<CraftSystem />} />
        </Routes>
        </div>
      </BrowserRouter>
     </div>
    </>
  );
};

export default App;
