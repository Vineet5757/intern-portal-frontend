import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Welcome, {user.name}</h1>
      <p><strong>Referral Code:</strong> {user.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{user.totalDonations}</p>

      <h2>Rewards</h2>
      <ul className="rewards-list">
        <li>🎽 Free T-Shirt (Unlocked at ₹1000)</li>
        <li>🎁 Gift Voucher (Unlocked at ₹2000)</li>
        <li>🏆 Special Badge (Unlocked at ₹3000)</li>
      </ul>
    </div>
  );
}
