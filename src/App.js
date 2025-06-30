import Toolnest from "./components/Toolnest";
import "./App.css";
import Public from "./pages/Public";
import Infra from "./pages/Infra";
import Services from "./pages/Services";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  
    <Router>
      <Routes>
      
        <Route path="/" element={<Toolnest />}/>
        <Route path="/public" element={<Public />} />
        <Route path = "/infra" element={<Infra/>}/>
         <Route path="/services" element={<Services/>}/>  
         <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
