import React, { useState } from "react";

const employees = [
    { id: 1, name: "Ram Singh", age: 39 },
    { id: 2, name: "Madhu Manjhi", age: 33 },
    { id: 3, name: "Protap Bakshi", age: 41 },
    { id: 4, name: "Yash Dhul", age: 29 },
];

const Employee = () => {
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortedEmployees, setSortedEmployees] = useState(employees);

    const handleSort = (key) => {
        const sorted = [...sortedEmployees].sort((a, b) => {
            if (sortOrder === "asc") {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
        setSortedEmployees(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-50 shadow-md rounded-lg">
            <h1 className="text-xl font-semibold text-center mb-4">Employee List</h1>
            <div className="flex justify-between gap-2 mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => handleSort("name")}
                >
                    Sort By Name {sortOrder === "asc" ? "↑" : "↓"}
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={() => handleSort("age")}
                >
                    Sort By Age {sortOrder === "asc" ? "↑" : "↓"}
                </button>
            </div>
            <ul className="divide-y divide-gray-200">
                {sortedEmployees.map((employee) => (
                    <li
                        key={employee.id}
                        className="py-2 px-4 flex justify-between items-center"
                    >
                        <span className="font-medium">{employee.name}</span>
                        <span className="text-gray-600">{employee.age} years old</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employee;
