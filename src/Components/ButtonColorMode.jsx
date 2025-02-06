import { useState, useEffect } from 'react';

export default function ButtonColorMode() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkMode, setIsDarkMode] = useState(savedTheme ? savedTheme === 'dark' : prefersDark);

    

    useEffect(() => {
        console.log("Use effect")
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode]);

    const toggleTheme = () => {
        console.log("Theme toggled", !isDarkMode)
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button className="navOptionsButton" onClick={toggleTheme}>
            <img src={isDarkMode ? "/icon/color-mode-light.png" : "/icon/color-mode-dark.png"}/>
        </button>
    );
};