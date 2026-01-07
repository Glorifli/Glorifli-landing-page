import React from 'react';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import ValueProposition from '../components/ValueProposition';
import ProofOfConcept from '../components/ProofOfConcept';
import LeadForm from '../components/LeadForm';
import BookingCalendar from '../components/BookingCalendar';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <PainPoints />
            <ValueProposition />
            <ProofOfConcept />
            <LeadForm />
            <BookingCalendar />
            <FAQ />
        </main>
    );
};

export default Home;
