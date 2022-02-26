import "./App.css";
import { Home, Shirts, HermosaBranding, ChamomileTeaPattern, BloodOrangePattern, GesturesPattern } from './components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dressmaking-workshop-app" element={<Shirts />} />
        <Route exact path="/branding-assets-hermosa" element={<HermosaBranding />} />
        <Route exact path="/chamomile-tea-pattern" element={<ChamomileTeaPattern />} />
        <Route exact path="/blood-orange-pattern" element={<BloodOrangePattern />} />
        <Route exact path="/gestures-pattern" element={<GesturesPattern />} />
      </Routes>
    </Router>
  );
}
