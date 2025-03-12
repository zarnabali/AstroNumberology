import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/Loginpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;