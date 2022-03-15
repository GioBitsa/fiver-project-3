import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard, Error } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
