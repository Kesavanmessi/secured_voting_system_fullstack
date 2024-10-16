import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashBoard from './goto-dashboard.jsx';
import Login from './Login.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import CreateElection from './CreateElection.jsx';
import ManageVoters from './ManageVoters.jsx';
import ViewResults from './ViewResults.jsx';
import AdminHome from './AdminHome.jsx';  // Home component for admin
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<DashBoard />} />
      
      {/* Admin login routes */}
      <Route path="/admin-login" element={<Login login="Admin" />} />
      
      {/* Admin dashboard with nested routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />}>
        {/* Redirect from /admin-dashboard to /admin-dashboard/home by default */}
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="create-election" element={<CreateElection />} />
        <Route path="manage-voters" element={<ManageVoters />} />
        <Route path="view-results" element={<ViewResults />} />
      </Route>

      <Route path="/voter-login" element={<Login login="Voter" />} />
    </Routes>
  </Router>
);
