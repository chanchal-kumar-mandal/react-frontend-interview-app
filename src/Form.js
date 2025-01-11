import React, {useState} from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted!. Name: ${formData.name} Email: ${formData.email}`);
        // Reset form
        setFormData({
            "name": "",
            "email": "",
        });

    }

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                Submit
                </button>
            </form>
        </div>
    )
}

export default Form;