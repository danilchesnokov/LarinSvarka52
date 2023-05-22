import { Routes, Route } from "react-router-dom";
import WhyUs from "./WhyUs";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<WhyUs />}/>
      </Routes>
    </div>
  );
}

export default App;
