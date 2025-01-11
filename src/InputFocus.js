import React, {useRef} from "react";

const InputFocus = () => {
    // Create a reference to the input element
    const inputRef = useRef(null);

    const handleClick = () => {
        // Focus the input element using the ref
        inputRef.current.focus();
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <input
                type="text"
                ref={inputRef} // Attach the ref to the input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type something here..."
            />
            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Focus Input
            </button>
        </div>
    );

};

export default InputFocus;