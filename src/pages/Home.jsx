import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div >
           <Hero></Hero>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;