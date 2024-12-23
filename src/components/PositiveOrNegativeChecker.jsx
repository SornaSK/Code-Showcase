import React, { useState } from 'react';

const PositiveOrNegativeChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const checkNumber = () => {
    const num = parseFloat(number);
    if (isNaN(num)) {
      setResult('Invalid input');
    } else if (num > 0) {
      setResult('Positive');
    } else if (num < 0) {
      setResult('Negative');
    } else {
      setResult('Zero');
    }
  };

  const codeSnippet = `
    const checkNumber = () => {
      const num = parseFloat(number);
      if (isNaN(num)) {
        setResult('Invalid input');
      } else if (num > 0) {
        setResult('Positive');
      } else if (num < 0) {
        setResult('Negative');
      } else {
        setResult('Zero');
      }
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 md:p-6 shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
        Positive or Negative Checker
      </h2>
      <p className="mb-4">Enter a number to check if it is positive, negative, or zero.</p>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="w-full p-2 md:p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
        className="w-full py-2 md:py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
        onClick={checkNumber}
      >
        Check
      </button>
      {result !== null && (
        <p className="text-center mt-4 text-lg font-bold">
          Result: {result}
        </p>
      )}
      <button
        className="mt-4 w-full py-2 md:py-3 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-500 transition duration-200"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
      {showCode && (
        <pre className="bg-gray-800 text-green-400 p-3 md:p-4 mt-4 rounded-lg overflow-x-auto">
          <code>{codeSnippet.trim()}</code>
        </pre>
      )}
    </div>
  );
};

export default PositiveOrNegativeChecker;
