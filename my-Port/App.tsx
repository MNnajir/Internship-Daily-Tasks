// src/App.tsx
import ErrorBoundary from './src/components23/ErrorBoundary';
import { Navigation } from './src/components23/Navigation';
import { Hero } from './src/components23/Home';
import { Projects } from './src/components23/Projects';
import Contact from './src/components23/Contact';
import { Footer } from './src/components23/Footer';
import { About } from './src/components23/About';
//import{Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <ErrorBoundary>

        <Navigation />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </ErrorBoundary>
    
    </>
  );
};

export default App;