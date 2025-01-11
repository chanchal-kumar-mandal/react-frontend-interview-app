import React, {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <>
            <p><b>Theme : </b> {theme}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </>
    )
 }

 export default ThemeToggle;