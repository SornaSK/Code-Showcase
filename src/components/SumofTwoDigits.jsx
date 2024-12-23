import React, { useState } from 'react';

const SumofTwoDigits = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const calculateSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    setSum(isNaN(number1) || isNaN(number2) ? 'Invalid input' : number1 + number2);
  };

  const codeSnippet = `
    const calculateSum = () => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      setSum(isNaN(number1) || isNaN(number2) ? 'Invalid input' : number1 + number2);
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 md:p-6 shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
        Sum of Two Digits
      </h2>
      <p className="mb-4">Enter two numbers to calculate their sum.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="w-full p-2 md:p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="w-full p-2 md:p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
        className="w-full py-2 md:py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
        onClick={calculateSum}
      >
        Calculate Sum
      </button>
      {sum !== null && (
        <p className="text-center mt-4 text-lg font-bold">
          Sum: {sum}
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

export default SumofTwoDigits;
