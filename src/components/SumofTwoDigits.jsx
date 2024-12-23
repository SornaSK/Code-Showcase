import React, { useState } from 'react';

const SumofTwoDigits = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const calculateSum = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(isNaN(sum) ? 'Invalid input' : sum);
  };

  const codeSnippet = `
    const calculateSum = () => {
      const sum = parseInt(num1) + parseInt(num2);
      return isNaN(sum) ? 'Invalid input' : sum;
    }
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Sum of Two Digits</h2>
      <p className="mb-4">A simple calculator to add two numbers.</p>
      <div className="mb-4 flex gap-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Number"
          className="w-1/2 p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Number"
          className="w-1/2 p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
        className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
        onClick={calculateSum}
      >
        Calculate Sum
      </button>
      {result !== null && <p className="text-center mt-4 text-lg font-bold">Result: {result}</p>}
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

export default SumofTwoDigits;
