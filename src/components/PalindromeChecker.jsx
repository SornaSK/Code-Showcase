import React, { useState } from 'react';

const PalindromeChecker = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const checkPalindrome = () => {
    const reversedWord = word.split('').reverse().join('');
    setResult(word === reversedWord ? 'Palindrome' : 'Not a Palindrome');
  };

  const codeSnippet = `
    const checkPalindrome = () => {
      const reversedWord = word.split('').reverse().join('');
      setResult(word === reversedWord ? 'Palindrome' : 'Not a Palindrome');
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Palindrome Checker</h2>
      <p className="mb-4">Check if the word is a palindrome.</p>
      <div className="mb-4">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
          className="w-full p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
         className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
         onClick={checkPalindrome}
      >
        Check Palindrome
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

export default PalindromeChecker;
