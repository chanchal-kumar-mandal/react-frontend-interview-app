import React, { useState } from "react";

const Child = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        onSendMessage(inputValue); // Send data to the parent component
        setInputValue(""); // Clear the input field
    };

    return (
        <div>
            <h2 className="text-md font-semibold mb-2">Child Component</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a message"
                className="border rounded w-full p-2 mb-2"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Send to Parent
            </button>
        </div>
    );
};

export default Child;
