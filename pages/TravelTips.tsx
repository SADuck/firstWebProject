import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { TravelTip } from '../types';

const tipsData: TravelTip[] = [
  {
    id: '1',
    title: 'Packing Essentials for Any Trip',
    content: 'Always roll your clothes instead of folding to save space. Don\'t forget a universal power adapter, a first-aid kit, and copies of important documents like your passport and insurance.'
  },
  {
    id: '2',
    title: 'Saving Money on Flights',
    content: 'Book flights 2-3 months in advance for the best rates. Use incognito mode when searching to avoid dynamic pricing, and consider flying on Tuesdays or Wednesdays which are often cheaper.'
  },
  {
    id: '3',
    title: 'Staying Safe Abroad',
    content: 'Share your itinerary with a trusted friend. Keep emergency numbers handy. Avoid displaying expensive jewelry and be aware of common tourist scams in the area you are visiting.'
  },
  {
    id: '4',
    title: 'Overcoming Jet Lag',
    content: 'Hydrate well during your flight. Try to adjust your sleep schedule a few days before departure. Upon arrival, get plenty of sunlight and avoid napping too long during the day.'
  },
  {
    id: '5',
    title: 'Responsible Tourism',
    content: 'Respect local customs and dress codes. Reduce plastic usage by carrying a reusable water bottle. Support the local economy by eating at local restaurants and buying handmade souvenirs.'
  }
];

const TravelTips: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleTip = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Tips & Advice</h1>
          <p className="text-gray-600">Essential guides to make your journey smoother and more enjoyable.</p>
        </div>

        <div className="space-y-4">
          {tipsData.map((tip, index) => (
            <div 
              key={tip.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleTip(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${openIndex === index ? 'text-indigo-600' : 'text-gray-900'}`}>
                  {tip.title}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {tip.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;