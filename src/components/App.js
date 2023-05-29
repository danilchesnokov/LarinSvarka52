import { Routes, Route } from "react-router-dom";
import WhyUs from "./WhyUs";
import Navigation from "./Navigation";
import Calculator from "./Calculator";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
