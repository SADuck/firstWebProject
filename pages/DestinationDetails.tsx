import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Check, Calendar } from 'lucide-react';
import destinationData from '../data.json';
import { Destination } from '../types';

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate finding data
    const found = (destinationData as Destination[]).find(d => d.id === id);
    setDestination(found || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
        <Link to="/destinations" className="text-indigo-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="text-white">
            <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-sm font-semibold mb-4">
              {destination.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-xl font-semibold">{destination.rating}</span>
              <span className="text-gray-300 ml-2 text-sm">(120+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Link to="/destinations" className="inline-flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Destinations
            </Link>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this place</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-3xl font-bold text-gray-900">${destination.price}</span>
                  <span className="text-gray-500"> / person</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" /> {destination.category}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 border rounded-lg hover:border-indigo-500 cursor-pointer transition-colors flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Select Dates</span>
                </div>
                <div className="p-3 border rounded-lg hover:border-indigo-500 cursor-pointer transition-colors">
                  <span className="block text-xs text-gray-500">Guests</span>
                  <span className="block text-gray-700 font-medium">2 Adults</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-transform active:scale-95 mb-4">
                Book Now
              </button>
              
              <p className="text-center text-gray-500 text-sm">You won't be charged yet</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Base Price (x2)</span>
                  <span>${destination.price * 2}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service Fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span>${destination.price * 2 + 150}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;