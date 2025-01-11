import React, {useRef} from "react";

const UncontrolledComponent = () => {

    const inputRef = useRef("");
    const handleChange = () => {
        alert(inputRef.current.value);
    };

    return (
        <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
            <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                Unontrolled Component
            </div>
            <p id="currentInput" class="mt-2 text-sm text-gray-600">
                <b>Current name: </b>{inputRef.current}
            </p>
            <label for="input" class="block text-sm font-medium text-gray-700 mb-1">
                Name
            </label>
            <input
                type="text"
                id="input"
                name="name"
                class="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                ref={inputRef} 
                onChange={() => handleChange()}
            />
        </div>
    );
};

export default UncontrolledComponent;