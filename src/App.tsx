import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Add more routes as we create other components */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
