import React, { useState } from 'react';
import SumofTwoDigits from '../components/SumofTwoDigits.jsx';
import PalindromeChecker from '../components/PalindromeChecker.jsx';
import OddOrEvenFinder from '../components/OddOrEvenFinder.jsx';
import TemperatureConverter from '../components/TemperatureConverter.jsx';
import PositiveOrNegativeChecker from '../components/PositiveOrNegativeChecker.jsx';

const CodingChallengesApp = () => {
  const [activeChallenge, setActiveChallenge] = useState('sum');

  const challenges = [
    { id: 'sum', name: 'Sum of Two Digits', component: SumofTwoDigits },
    { id: 'palindrome', name: 'Palindrome Checker', component: PalindromeChecker },
    { id: 'oddOrEven', name: 'Odd or Even Finder', component: OddOrEvenFinder },
    { id: 'temperature', name: 'Temperature Converter', component: TemperatureConverter },
    { id: 'positiveNegative', name: 'Positive or Negative Checker', component: PositiveOrNegativeChecker },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-cyan-400">
          Code Showcase
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => setActiveChallenge(challenge.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition duration-300 
                ${
                  activeChallenge === challenge.id
                    ? 'bg-cyan-500 shadow-lg'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
            >
              {challenge.name}
            </button>
          ))}
        </div>
        <div>
          {challenges.map(
            (challenge) =>
              activeChallenge === challenge.id && (
                <div
                  key={challenge.id}
                  className="p-4 md:p-6 bg-gray-800 rounded-lg shadow-xl"
                >
                  <challenge.component />
                </div>
              )
          )}
        </div>
      </div>
       {/* Footer */}
      <footer className="bg-gray-700 text-gray-300 py-6 mt-auto">
        <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <p className="mb-4 md:mb-0">© 2024 Sornakala S. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/in/sornakala-s/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition duration-200"
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-1 5.43-1 3.5 0.57 0 2.5 0 4.98 1.57 4.98 3.5zM0 24h5V7H0v17zm22.13-10.59c0-5.61-3.29-8.24-7.69-8.24-3.48 0-5.03 1.94-5.9 3.3V7H7v17h5V13.4c0-.83.15-1.65.54-2.31.65-1.1 1.8-1.79 3.25-1.79 2.3 0 3.22 1.7 3.22 4.2V24h5v-9.59z" />
            </svg>
      Connect with me.
    </a>
  </div>
</footer>
    </div>
  );
};

export default CodingChallengesApp;
