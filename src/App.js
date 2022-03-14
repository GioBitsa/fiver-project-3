import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
