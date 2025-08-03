

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import Dashboard from './pages/dashboard';
import Leaderboard from './pages/leaderboard';  // Import the page


// Add this inside <Routes>



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

