import React, { useState } from 'react';

const PalindromeChecker = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const checkPalindrome = () => {
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    setResult(cleanText === cleanText.split('').reverse().join(''));
  };

  const codeSnippet = `
    const checkPalindrome = () => {
      const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
      setResult(cleanText === cleanText.split('').reverse().join(''));
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 md:p-6 shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
        Palindrome Checker
      </h2>
      <p className="mb-4">Check if the entered text is a palindrome.</p>
      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          className="w-full p-2 md:p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
        className="w-full py-2 md:py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
        onClick={checkPalindrome}
      >
        Check Palindrome
      </button>
      {result !== null && (
        <p className="text-center mt-4 text-lg font-bold">
          {result ? 'It is a Palindrome' : 'Not a Palindrome'}
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

export default PalindromeChecker;
