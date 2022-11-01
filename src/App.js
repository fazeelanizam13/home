import "./App.css";
import { Home } from './components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router basename="/home">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
