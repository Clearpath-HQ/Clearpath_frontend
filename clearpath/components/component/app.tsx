import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workspace from './Workspace';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/workspace/:workspaceId" element={<Workspace />} />
        <Route path="/" element={<Workspace />} />
      </Routes>
    </Router>
  );
};

export default App;