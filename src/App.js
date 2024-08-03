import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import Weatherapp from "./Weatherapp";
import Clock from "./Clock";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/weather" element={<Weatherapp />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
