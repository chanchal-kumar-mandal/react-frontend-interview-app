import "./App.css";
import User from "./User";
import Counter from "./Counter";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import EventHandler from "./EventHandler";
import Form from "./Form";
import InputFocus from "./InputFocus";
import FactorialNumber from "./FactorialNumber";
import Task from "./Task";
import Student from "./Student";
import Post from "./Post";
import Employee from "./Employee";
import Parent from "./Parent";

function App() {
  const sections = [
    "Props",
    "State",
    "Context",
    "Event Handler",
    "Form",
    "useRef",
    "Controlled Vs Uncontrolled Component",
    "useMemo",
    "useReducer",
    "useCallback",
    "List Map Filter Reduce Data",
    "Fetch API Data",
    "Sort Data",
    "Passing Data From Child to Parent",
    "Router",
    "HOC",
    "Jest",
    "Webpack",
    "Redux With Middlewire",
    "REST API",
    "GraphQL",
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">ReactJS Practical!</h1>
        <p className="mt-2">
          Practical ReactJS Guide for Frontend Interviews with Tailwind CSS.
        </p>
      </div>

      {/* Quick Links Menu */}
      <nav className="sticky top-0 bg-white shadow-lg p-4 z-50 mb-136">
        <ul className="flex flex-wrap justify-center gap-4">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
                className="px-4 py-2 border border-gray-300 text-gray-800 rounded-lg shadow-sm transition-all duration-300 
                     hover:border-gray-500 hover:text-blue-700 hover:shadow-md active:shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          id={section.replace(/\s+/g, "-").toLowerCase()}
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800">{section}</h2>
          <p className="text-gray-600 mt-4">
            {/* Replace with appropriate component rendering */}
            {section === "Props" && <User />}
            {section === "State" && <Counter />}
            {section === "Context" && (
              <ThemeProvider>
                <ThemeToggle />
              </ThemeProvider>
            )}
            {section === "Event Handler" && <EventHandler />}
            {section === "Form" && <Form />}
            {section === "useRef" && <InputFocus />}
            {section === "Controlled Vs Uncontrolled Component" && (
              <>
                <ControlledComponent />
                <UncontrolledComponent />
              </>
            )}
            {section === "useMemo" && <FactorialNumber />}
            {section === "useReducer" && <Task />}
            {section === "useCallback" && <FactorialNumber />}
            {section === "List Map Filter Reduce Data" && <Student />}
            {section === "Fetch API Data" && <Post />}
            {section === "Sort Data" && <Employee />}
            {section === "Passing Data From Child to Parent" && <Parent />}
            {/* Add other sections as needed */}
            {section !== "Props" &&
              section !== "State" &&
              section !== "Context" &&
              section !== "Event Handler" &&
              section !== "Form" &&
              section !== "useRef" &&
              section !== "Controlled Vs Uncontrolled Component" &&
              section !== "useMemo" &&
              section !== "useReducer" &&
              section !== "useCallback" &&
              section !== "List Map Filter Reduce Data" &&
              section !== "Fetch API Data" &&
              section !== "Sort Data" &&
              section !== "Passing Data From Child to Parent" &&
              "Content for this section is not implemented yet."}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
