'use client';

import { useState } from 'react';

type TabType = 'about' | 'experiences' | 'recommended';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const tabContent: Record<TabType, React.ReactElement> = {
    about: (
      <div className="text-[#E5E6E9] text-lg leading-8">
        <p className="mb-4">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
        <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</p>
      </div>
    ),
    experiences: (
      <div className="text-[#E5E6E9] text-lg leading-8">
        <p className="mb-4">I have extensive experience in sales and customer relations.</p>
        <p>Over the years, I've helped numerous clients achieve their goals through innovative solutions.</p>
      </div>
    ),
    recommended: (
      <div className="text-[#E5E6E9] text-lg leading-8">
        <p className="mb-4">Based on my expertise, I recommend exploring our latest CRM features.</p>
        <p>These tools can significantly enhance your team's productivity and customer engagement.</p>
      </div>
    ),
  };

  return (
    <div className="flex min-h-screen bg-[#181C1F]">
      {/* Left half empty */}
      <div className="w-1/2"></div>
      {/* Right half with widgets */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-8 p-8">
        {/* Profile Tabs Widget */}
        <div className="w-full max-w-md bg-[#202328] rounded-3xl shadow-[0_8px_24px_-3px_rgba(0,0,0,0.4)] p-8">
          <div className="flex gap-0 mb-6">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-2 rounded-2xl font-bold text-lg transition ${
                activeTab === 'about' ? 'bg-[#23272A] text-white' : 'bg-transparent text-[#AEB2B7] hover:bg-[#23272A] hover:text-white'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab('experiences')}
              className={`px-6 py-2 rounded-2xl font-bold text-lg transition ${
                activeTab === 'experiences' ? 'bg-[#23272A] text-white' : 'bg-transparent text-[#AEB2B7] hover:bg-[#23272A] hover:text-white'
              }`}
            >
              Experiences
            </button>
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-6 py-2 rounded-2xl font-bold text-lg transition ${
                activeTab === 'recommended' ? 'bg-[#23272A] text-white' : 'bg-transparent text-[#AEB2B7] hover:bg-[#23272A] hover:text-white'
              }`}
            >
              Recommended
            </button>
          </div>
          {tabContent[activeTab]}
        </div>
        {/* Gallery Widget */}
        <div className="w-full max-w-md bg-[#202328] rounded-3xl shadow-[0_8px_24px_-3px_rgba(0,0,0,0.4)] p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-2xl">Gallery</h2>
            <button
              onClick={() => alert('Add Image functionality')}
              className="px-4 py-2 bg-[#4F58FF] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition"
            >
              + Add Image
            </button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <button className="w-10 h-10 bg-[#202328] rounded-full flex items-center justify-center text-white hover:bg-[#4F58FF] transition">‹</button>
            <div className="flex gap-4 overflow-hidden">
              <div className="w-20 h-20 bg-gray-600 rounded-xl"></div>
              <div className="w-20 h-20 bg-gray-600 rounded-xl"></div>
              <div className="w-20 h-20 bg-gray-600 rounded-xl"></div>
            </div>
            <button className="w-10 h-10 bg-[#202328] rounded-full flex items-center justify-center text-white hover:bg-[#4F58FF] transition">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
