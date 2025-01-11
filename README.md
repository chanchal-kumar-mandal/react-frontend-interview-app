## Description
A practical guide to ReactJS concepts using Function-Based Components and **Tailwind CSS** for styling. This project demonstrates a variety of ReactJS features, including state management, context, form handling, API interaction, and more.

### Features:
1. **Props**: Passing data between parent and child components.
2. **State**: Managing component state using `useState`.
3. **Context**: Using `Context` API for theme management.
4. **Event Handling**: Handling user input and actions.
5. **Form Handling**: Using controlled and uncontrolled components in forms.
6. **useRef**: Managing focus and direct manipulation of DOM elements.
7. **Controlled vs Uncontrolled Components**: Understanding the difference and use cases.
8. **useMemo**: Optimizing performance with memoization.
9. **useReducer**: Managing complex state logic in React components.
10. **useCallback**: Memoizing callback functions to optimize performance.
11. **List, Map, Filter, Reduce**: Demonstrating common array methods in React.
12. **API Fetching**: Making API requests and handling responses.
13. **Sorting Data**: Demonstrating sorting functionality for lists.
14. **Passing Data From Child to Parent**: Managing state flow between components.
15. **Routing**: React Router for handling page navigation.
16. **Higher-Order Components (HOC)**: Reusable components that enhance other components.
17. **Testing**: Setting up Jest for unit testing React components.
18. **Webpack**: Customizing build configurations for React.
19. **Redux With Middleware**: Managing global state with Redux and middleware.
20. **REST API and GraphQL**: Working with APIs to fetch data.

## Live App: [https://chanchal-kumar-mandal.github.io/react-frontend-interview-app/](https://chanchal-kumar-mandal.github.io/react-frontend-interview-app/)

## Demo Screenshots

### Frontend UI:


### Props & State:

![image](https://github.com/user-attachments/assets/e2060560-8b7a-482f-8bcd-fba9d8502af0)


### Context & Event Handler:

![image](https://github.com/user-attachments/assets/71a51959-792d-4571-a510-9ad1dbbd9f97)


### Context:

![Context](https://user-images.githubusercontent.com/14269798/168514110-1faa2a5e-05d9-43bc-998c-7b0ff59dc45e.png)

### Form & useRef:

![image](https://github.com/user-attachments/assets/ef8c61e4-bfbe-4eda-bd11-ca1b4f6ae038)


### useReducer & useCallback:

![image](https://github.com/user-attachments/assets/efc8ff4d-6b46-48a8-bcaa-5c5670b86c72)


### List Map Filter Reduce Data:

![image](https://github.com/user-attachments/assets/870ac03b-bce9-44c3-9bc6-9458706043c6)

### Controlled Vs Uncontrolled Components:

![Controlled Vs Uncontrolled](https://user-images.githubusercontent.com/14269798/168513500-cd180942-85ef-41c0-8fd8-c6d42d201446.png)

### API Fetch:

![API Fetch](https://user-images.githubusercontent.com/14269798/168513985-e39d2fc2-02e2-42dd-ba8e-6a0e992b6a14.png)

### Sorting Data:

![Sorting Data](https://user-images.githubusercontent.com/14269798/168513500-cd180942-85ef-41c0-8fd8-c6d42d201446.png)

## Requirements

### Install Node.js:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Install Visual Studio (VS) Code:
[https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### Install Extensions in VS Code:
1. **Thunder Client** (for API testing)
2. **ES7 React/Redux/GraphQL/React-Native Snippets**
3. **Bracket Pair Colorizer**
4. **Auto Rename Tag**
5. **Live Server**
6. **Prettier - Code formatter**

### Add Chrome Extension:
**React Developer Tools**

## Steps to Run the App Locally:

### 1. Install React App:
```bash
$ npx create-react-app reactjs-play-with-data
2. Go to the App Directory:
bash
Always show details

Copy code
$ cd reactjs-play-with-data
3. Install Required Dependencies:
bash
Always show details

Copy code
$ npm install react-icons
4. Start the App:
Run the following command and open http://localhost:3000 in your browser:

bash
Always show details

Copy code
$ npm start
Important Links:
This project was bootstrapped with Create React App. """

Save content to a file
file_path = '/mnt/data/README.md'

with open(file_path, 'w') as file: file.write(readme_content)

file_path

### Set up Github Hosting 
1. Create a GitHub Repository
	Go to GitHub and create a new repository for your project.
	Initialize the repository with a README if you like.
2. Push Your React App to GitHub (if not already done)

	git init  # Initialize git if not done already
	git remote add origin https://github.com/username/repository-name.git  # Replace with your repository URL
	git add .
	git commit -m "Initial commit"
	git push -u origin main  # Push to the main branch
3. Install gh-pages Package
	$npm install gh-pages --save-dev
4. Add Scripts to package.json
	Open package.json and add the following:
	"homepage": "https://yourusername.github.io/repository-name"

	Update the scripts section in package.json to include deployment commands.
	"scripts": {
	  "start": "react-scripts start",
	  "build": "react-scripts build",
	  "test": "react-scripts test",
	  "eject": "react-scripts eject",
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build"
	}
5. Build and Deploy Your React App
	$npm run build
	$npm run deploy
6. Enable GitHub Pages in Repository Settings
	Go to your repository on GitHub.
	Click on Settings (on the right side).
	Scroll down to the Pages section in the left sidebar.
	Under Source, select gh-pages branch.
	Click Save.
	Your site will now be available at: arduino
	Copy code
	https://username.github.io/repository-name/
7. Access Your Hosted React App
	Your React app will be live at https://yourusername.github.io/repository-name/.

