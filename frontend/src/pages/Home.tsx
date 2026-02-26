import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Trust from "../components/Trust";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <Trust />
      <Footer />
    </div>
  )
}
