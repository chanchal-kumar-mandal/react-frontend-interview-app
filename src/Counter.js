import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p><b>Count : </b>{count}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4" onClick={() => setCount(count + 1)}>Increment</button>
            <button  className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-4" onClick={() => setCount(count - 1)}>Decrement</button>
            <button  className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 mr-4" onClick={() => setCount(0)}>Reset</button>
        
        </>
    )
}

export default Counter;