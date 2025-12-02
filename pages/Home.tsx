import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, CreditCard } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import destinationData from '../data.json';
import { Destination } from '../types';

const Home: React.FC = () => {
  // Use first 3 destinations as featured
  const featuredDestinations = (destinationData as Destination[]).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/travel/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore the world's most beautiful destinations with curated travel packages designed just for you.
          </p>
          <Link 
            to="/destinations" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors transform hover:scale-105"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Destinations</h3>
              <p className="text-gray-600">Access to over 500+ destinations worldwide with local guides.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Travel</h3>
              <p className="text-gray-600">We ensure all safety protocols are met for a worry-free trip.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Find a lower price? We'll match it and give you a discount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Destinations</h2>
              <p className="text-gray-600">Top picks for this season</p>
            </div>
            <Link to="/destinations" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
          <p className="text-indigo-100 mb-8">Get the latest travel deals and inspiration sent straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
            />
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;