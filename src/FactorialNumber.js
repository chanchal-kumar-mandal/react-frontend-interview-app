import React, {useState, useMemo, useCallback } from "react";

const FactorialNumber = () => {
    const [number, setNumber] = useState(5);
    const [theme, setTheme] = useState('light');

    // Function to calculate factorial (expensive computation)
    const factorial = (n) => {
        console.log('Calculating factorial...');
        if (n < 0) return 0;
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    // Memoize factorial calculation
    const memoizedFactorial = useMemo(() => factorial(number), [number]);

    // Memoize the theme toggle handler
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <div className={`p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
            <div>
                <label htmlFor="number" className="block mb-2">Enter a number:</label>
                <input
                type="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                className={`w-full px-3 py-2 border rounded mb-4 ${
                    theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'
                }`}
                />
            </div>
            <div>
                <p className="mb-4">Factorial: {memoizedFactorial}</p>
            </div>
            <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default FactorialNumber;