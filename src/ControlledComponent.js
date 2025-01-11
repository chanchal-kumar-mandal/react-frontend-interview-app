import React, {useState} from 'react';

const ControlledComponent = () => {

    const [data, setData] = useState("");

    return (
        <div class="max-w-md mx-auto mt-4 border border-gray-300 rounded-md shadow-sm p-4 relative">
            <div class="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-blue-600">
                Controlled Component
            </div>
            <p id="currentName" class="mt-2 text-sm text-gray-600">
                <b>Current name: </b>{data}
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
                value={data} 
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
};

export default ControlledComponent;