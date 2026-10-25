import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import AIDirectory from './pages/aidirectory/AIDirectory';
import EducationAndResearch from './pages/educationandresearch/EducationAndResearch';
import CodingAndTechnology from './pages/codingandtechnology/CodingAndTechnology';
import BusinessAndProductivity from './pages/businessandproductivity/BusinessAndProductivity';
import WritingAndCreativity from './pages/writingandcreativity/WritingAndCreativity';

// Pages
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={<AIDirectory />} />
          <Route path="education" element={<EducationAndResearch />} />
          <Route path="coding" element={<CodingAndTechnology />} />
          <Route path="business" element={<BusinessAndProductivity />} />
          <Route path="writing" element={<WritingAndCreativity />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
