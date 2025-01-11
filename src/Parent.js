import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [message, setMessage] = useState("");

    const handleMessage = (childData) => {
        setMessage(childData);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded shadow p-4">
            <h1 className="text-lg font-semibold mb-4">Parent Component</h1>
            <p className="mb-4 text-gray-700">
                Message from Child: <strong>{message}</strong>
            </p>
            {/* Child component embedded seamlessly */}
            <div className="bg-gray-50 rounded p-4">
                <Child onSendMessage={handleMessage} />
            </div>
        </div>
    );
};

export default Parent;
