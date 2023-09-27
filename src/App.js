import "./App.css";
import { Home } from './components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-V5S51XPM71';
ReactGA.initialize(TRACKING_ID);

export function App() {
  return (
    <Router basename="/home">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
