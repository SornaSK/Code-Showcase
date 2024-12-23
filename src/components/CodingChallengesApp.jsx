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
             <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" id="linkedin">
        <path fill="#187FB8" d="M3 22h12v38H3z"></path>
        <path fill="#187FB8" d="M3 22h12v38H3z"></path>
        <path fill="#1267A0" d="M3 22h12v38H3z"></path>
        <path fill="#187FB8" d="M3 43.498c3 1.202 7 2.208 12 2.985V22H3v21.498z"></path>
        <path fill="#2499CE" d="M3 26.899c3 1.203 7 2.208 12 2.985V22H3v4.899z"></path>
        <path fill="#187FB8" d="M47.864 21.527C40.939 21.527 36 25.274 36 27.902V22H22.026c.176 3 0 38 0 38H36V39.462c0-1.15-.254-2.302.095-3.13.934-2.302 2.69-4.689 6.296-4.689 4.714 0 6.609 3.539 6.609 8.725V60h14V38.892c0-11.86-6.549-17.365-15.136-17.365z"></path>
        <path fill="#1267A0" d="M47.864 21.527C40.939 21.527 36 25.274 36 27.902V22H22.026c.176 3 0 38 0 38H36V39.462c0-1.15-.254-2.302.095-3.13.934-2.302 2.69-4.689 6.296-4.689 4.714 0 6.609 3.539 6.609 8.725V60h14V38.892c0-11.86-6.549-17.365-15.136-17.365z"></path>
        <path fill="#187FB8" d="M47.864 21.527C40.939 21.527 36 25.274 36 27.902V22H22.026c.104 2 .084 15.168.05 25.574 4.328.479 8.924.718 13.924.728v-8.84c0-1.15.026-1.381.026-1.381 0-3.613 2.758-6.438 6.365-6.438 4.714 0 6.609 3.539 6.609 8.725v7.226c5-.521 9.747-1.32 14-2.353v-6.35c0-11.859-6.549-17.364-15.136-17.364z"></path>
        <path fill="#2499CE" d="M47.864 21.527C40.939 21.527 36 25.274 36 27.902V22H22.026c.051 1 .072 4.418.077 9.014 4.403.486 9.019.72 13.774.72 9.012 0 17.613-.948 25.135-2.597-2.636-5.138-7.427-7.61-13.148-7.61zM8.383 3.818C3.919 3.818 1 6.633 1 10.415 1 14.126 3.835 17 8.21 17h.088c4.542 0 7.37-2.885 7.37-6.594-.085-3.781-2.827-6.588-7.285-6.588z"></path>
        <path fill="#187FB8" d="M8.383 7.419C3.919 7.419 1 6.633 1 10.415 1 14.126 3.835 17 8.21 17h.088c4.542 0 7.37-2.885 7.37-6.594-.085-3.781-2.827-2.987-7.285-2.987z"></path>
        <path fill="#1267A0" d="M8.383 12.911C3.919 12.911 1 9.237 1 10.415 1 14.126 3.835 17 8.21 17h.088c4.542 0 7.37-2.885 7.37-6.594-.026-1.176-2.887 2.505-7.285 2.505z"></path>
      </svg>
      Connect with me.
    </a>
  </div>
</footer>
    </div>
  );
};

export default CodingChallengesApp;
