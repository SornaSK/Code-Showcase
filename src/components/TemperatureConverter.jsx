import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [showCode, setShowCode] = useState(false);

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius);
    setFahrenheit(isNaN(c) ? 'Invalid input' : (c * 9/5) + 32);
  };

  const codeSnippet = `
    const convertToFahrenheit = () => {
      const c = parseFloat(celsius);
      setFahrenheit(isNaN(c) ? 'Invalid input' : (c * 9/5) + 32);
    };
  `;

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Temperature Converter</h2>
      <p className="mb-4">Convert Celsius to Fahrenheit.</p>
      <div className="mb-4 flex gap-4">
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Celsius"
          className="w-1/2 p-3 rounded-lg bg-gray-600 text-white border-none focus:outline-none"
        />
      </div>
      <button
         className="w-full py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-200"
         onClick={convertToFahrenheit}
      >
        Convert to Fahrenheit
      </button>
      {fahrenheit !== '' && <p className="text-center mt-4 text-lg font-bold">Fahrenheit: {fahrenheit}</p>}
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

export default TemperatureConverter;
