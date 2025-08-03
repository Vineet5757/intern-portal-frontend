import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Intern Portal Login</h1>
      <input
        type="text"
        placeholder="Enter your name  "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
