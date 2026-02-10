
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import SnippetDetail from './pages/SnippetDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippets" element={<Catalogue />} />
        <Route path="/snippet/:id" element={<SnippetDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
