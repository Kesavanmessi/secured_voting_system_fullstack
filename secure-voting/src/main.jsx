import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './goto-dashboard.jsx';
import Login from './Login.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/admin-login" element={<Login login="Admin" />} />
      <Route path="/voter-login" element={<Login login="Voter" />} />
    </Routes>
  </Router>
);
