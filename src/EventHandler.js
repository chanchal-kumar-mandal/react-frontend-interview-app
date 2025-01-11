import React, {useState} from "react";

const EventHandler = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [hoverText, setHoverText] = useState('Hover over the box!');
    const [isChecked, setIsChecked] = useState(false);
    const [keyPressed, setKeyPressed] = useState('');


    const handleClick = () => {
        setCount(count + 1);
    };


    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted email: ${email}`);
    };

    const handleMouseEnter = () => {
        setHoverText('Mouse is inside the box!');
    };

    const handleMouseLeave = () => {
        setHoverText('Mouse left the box!');
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleKeyPress = (event) => {
        setKeyPressed(event.key);
    };

    return (
        <>
            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Handling Button Click
                </div>
                <p id="currentName" class="mt-2 text-sm text-gray-600">
                    Button clicked <b>{count}</b> times.
                </p>
                <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
                Click Me
            </button>
            </div>

            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Handling Input Change
                </div>
                <p id="currentName" class="mt-2 text-sm text-gray-600">
                    <b>Current name: </b>{name}
                </p>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    class="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                    value={name} 
                    onChange={handleChange}
                />
            </div>

            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Handling Form Submission
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded"
                    />
                    <button type="submit" className="bg-green-500 text-white p-2 mt-2 rounded">
                        Submit
                    </button>
                </form>
            </div>

            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Mouse Hover Event
                </div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="w-32 h-32 bg-blue-300 flex items-center justify-center text-center rounded-lg"
                >
                    Hover me
                </div>
                <p className="mt-4">{hoverText}</p>
            </div>

            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Checkbox Change Event
                </div>
                <label>
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    />
                     Accept Terms & Conditions
                </label>
                <p className="mt-2">
                    {isChecked ? 'You accepted the terms.' : 'You have not accepted the terms.'}
                </p>
            </div>

            <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
                <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                    Key Press Event
                </div>
                <input
                    type="text"
                    onKeyPress={handleKeyPress}
                    className="border border-gray-300 p-2 rounded"
                />
                <p className="mt-2">You pressed: {keyPressed}</p>
            </div>
        </>
    );
};

export default EventHandler;