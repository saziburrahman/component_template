"use client"
import React, { useState } from 'react';

const Navbar5: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('Popular');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    // fixed bottom-0 z-50 -translate-x-1/2
    <div className=" w-full  bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="w-full">
        {/* Button Group */}
        {/* max-w-xs */}
        <div className="w-full  grid grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600">
          <button
            type="button"
            onClick={() => handleButtonClick('New')}
            className={`px-5 py-1.5 text-xs font-medium rounded-lg ${activeButton === 'New' ? 'bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900' : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}`}
          >
            New
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick('Popular')}
            className={`px-5 py-1.5 text-xs font-medium rounded-lg ${activeButton === 'Popular' ? 'bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900' : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}`}
          >
            Popular
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick('Following')}
            className={`px-5 py-1.5 text-xs font-medium rounded-lg ${activeButton === 'Following' ? 'bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900' : 'text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}`}
          >
            Following
          </button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 20"
            aria-hidden="true"
          >
            <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
          </svg>
          <span className="sr-only">Bookmark</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
          <span className="sr-only">New post</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>

        <button type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
          </svg>
          <span className="sr-only">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar5;
