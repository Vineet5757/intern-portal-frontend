

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/dashboard';
import Leaderboard from './pages/leaderboard';  // Import the page


// Add this inside <Routes>



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

