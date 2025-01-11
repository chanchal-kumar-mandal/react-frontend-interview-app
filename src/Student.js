import React, { useState } from "react";

let studentList = [
  { id: 1, name: "Ajay Ratra", age: 17 },
  { id: 2, name: "Manv Vora", age: 13 },
  { id: 3, name: "Hrishikesh Sharma", age: 19 },
  { id: 4, name: "Nirmal Kanji", age: 9 },
];

const Student = () => {
  const [minAge, setMinAge] = useState(0);

  const filteredStudent = studentList.filter((student) => student.age >= minAge);

  const listStudent = filteredStudent.map((student) => {
    return (
      <li
        key={student.id}
        className="py-2 px-4 bg-gray-100 rounded-lg shadow-sm my-2"
      >
        {student.name} - {student.age} years old
      </li>
    );
  });

  const averageAge =
    filteredStudent.reduce((sum, student) => sum + student.age, 0) /
    (filteredStudent.length || 1);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Student List
      </h2>
      <label className="block mb-4">
        <div className="text-gray-600 mb-2">Filter By Minimum Age:</div>
        <input
          type="number"
          value={minAge}
          onChange={(e) => setMinAge(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
      <ul className="list-none">{listStudent}</ul>
      <div className="mt-4 text-gray-700 font-semibold">
        Average Age: {averageAge.toFixed(1)} years
      </div>
    </div>
  );
};

export default Student;
