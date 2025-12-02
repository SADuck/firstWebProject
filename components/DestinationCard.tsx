import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-semibold text-indigo-600">
          ${destination.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-semibold text-yellow-700">{destination.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 mb-4 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {destination.category}
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>
        <Link 
          to={`/destinations/${destination.id}`}
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          View Details <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;