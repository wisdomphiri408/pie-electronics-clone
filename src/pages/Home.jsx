import { motion } from 'framer-motion';


import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Hero section */}
      <Hero/>
    </div>
  );
};

export default Home;