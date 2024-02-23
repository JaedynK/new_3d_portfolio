import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar, Hero } from './components';

// Lazy-loaded components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
// const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
      </Suspense>
    </div>
  </BrowserRouter>
  );
};

export default App;

