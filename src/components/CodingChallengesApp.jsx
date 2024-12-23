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
    </div>
  );
};

export default CodingChallengesApp;
