
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaSplitSection from './components/MediaSplitSection';
import Products from './components/Products';
import About from './components/About';
import References from './components/References';
import Dealerships from './components/Dealerships';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-sys-light font-sans text-sys-navy selection:bg-sys-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MediaSplitSection />
        <Products />
        <About />
        <References />
        <Dealerships />
        <Contact />
      </main>
    </div>
  );
}

export default App;
