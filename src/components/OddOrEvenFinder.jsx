import React, { useState } from 'react';

const OddOrEvenFinder = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const checkOddOrEven = () => {
    const parsedNumber = parseInt(number);
    setResult(isNaN(parsedNumber) ? 'Invalid input' : parsedNumber % 2 === 0 ? 'Even' : 'Odd');
  };

  const codeSnippet = `
    const checkOddOrEven = () => {
      const parsedNumber = parseInt(number);
      setResult(isNaN(parsedNumber) ? 'Invalid input' : parsedNumber % 2 === 0 ? 'Even' : 'Odd');
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Odd or Even Finder</h2>
      <p className="mb-4">Check if the number is odd or even.</p>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="w-full p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
         className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
         onClick={checkOddOrEven}
      >
        Check Odd or Even
      </button>
      {result && <p className="text-center mt-4 text-lg font-bold">Result: {result}</p>}
      <button
        className="mt-4 w-full py-3 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-500 transition duration-200"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
      {showCode && (
        <pre className="bg-gray-800 text-green-400 p-4 mt-4 rounded-lg">
          <code>{codeSnippet.trim()}</code>
        </pre>
      )}
    </div>
  );
};

export default OddOrEvenFinder;
