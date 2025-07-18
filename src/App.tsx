import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseHighlights from './components/CourseHighlights';
import LearningApproach from './components/LearningApproach';
import CourseOverview from './components/CourseOverview';
import TrainerProfile from './components/TrainerProfile';
import ChiefGuest from './components/ChiefGuest';
// import CourseAgenda from './components/CourseAgenda';
// import Testimonials from './components/Testimonials';
import RegistrationSection from './components/RegistrationSection';
// import FAQ from './components/FAQ';
import Footer from './components/Footer';
// import Banner from './components/Banner';


function App() {
  // Update document title
  React.useEffect(() => {
    document.title = "GRI Certified Sustainability Training | RSM Saudi Academy";
    
    // Also update favicon to be more relevant (using a free favicon)
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.setAttribute('href', 'https://img.icons8.com/color/48/000000/leaf.png');
    }
  }, []);

  return (
    <div className="font-sans">
      {/* <Banner /> */}
      <Navbar />
      <div className="flex flex-col">
        <HeroSection />
        <CourseHighlights />
        <LearningApproach />
        <CourseOverview />
        <TrainerProfile />
        <ChiefGuest />
        {/* <CourseAgenda /> */}
        {/* <Testimonials /> */}
        <RegistrationSection />
        {/* <FAQ /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;