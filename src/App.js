import './App.css';
import HomePage from './pages/home/HomePage';
import GeneratedPage from './pages/generated/GeneratedPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/generated" element={<GeneratedPage />} />
      </Routes>
    </div>
  );
}

export default App;
