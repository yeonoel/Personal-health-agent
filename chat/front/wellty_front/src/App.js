import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IMessage from "./pages/IMessage";
import LocationPharm from './pages/LocationPharm'
import Docteurs from "./pages/Docteurs";
import Header from './pages/Header';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Rdv from './pages/Rdv';
import Formu from './pages/Formu';

function App() {
  return (
    <Router >
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/wellty" element={<IMessage />} />
          <Route path="/consutation" element={[<Header />, <Consultation />]} />
          <Route path="/pharmacies" element={[<Header />, <LocationPharm />]} />
          <Route path="/docteurs" element={[<Header />, <Docteurs />]} />
          <Route path="/rdv" element={[<Header />, <Rdv />]} />
          <Route path="/formulairerdv" element={[<Header />, <Formu />]} />
        </Routes>
    </Router>
  );
}

export default App;