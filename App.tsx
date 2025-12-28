import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import ProofOfConcept from './components/ProofOfConcept';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-white min-h-screen selection:bg-primary/30 selection:text-primary-100">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <ProofOfConcept />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;