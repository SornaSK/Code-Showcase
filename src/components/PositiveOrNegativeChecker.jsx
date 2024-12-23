import React, { useState } from 'react';

const PositiveOrNegativeChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const checkPositiveOrNegative = () => {
    const parsedNumber = parseFloat(number);
    setResult(isNaN(parsedNumber) ? 'Invalid input' : parsedNumber > 0 ? 'Positive' : parsedNumber < 0 ? 'Negative' : 'Zero');
  };

  const codeSnippet = `
    const checkPositiveOrNegative = () => {
      const parsedNumber = parseFloat(number);
      setResult(isNaN(parsedNumber) ? 'Invalid input' : parsedNumber > 0 ? 
      'Positive' : parsedNumber < 0 ? 'Negative' : 'Zero');
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Positive or Negative Checker</h2>
      <p className="mb-4">Check if the number is positive, negative, or zero.</p>
      <div className="mb-4 flex gap-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="w-1/2 p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
         className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
         onClick={checkPositiveOrNegative}
      >
        Check
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

export default PositiveOrNegativeChecker;
