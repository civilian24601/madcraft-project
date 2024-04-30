import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, BlogPosts, Newsletter } from './RouteComponents';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;