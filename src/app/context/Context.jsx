
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext);
}



export function ThemeProvider({ children }) {
    const [dayMoon, setDayMoon] = useState(() => {
        const storedPreference = localStorage.getItem('themePreference');
        return storedPreference === 'night';
    });
    const clickBtn = () => {
        const newDayMoon = !dayMoon;
        setDayMoon(newDayMoon);
        localStorage.setItem('themePreference', newDayMoon ? 'night' : 'day');
        document.body.style.background = newDayMoon ? '#24272C' : '#E6E7EE';
    };
    const handleKeyPress = (event) => {
        if (event.keyCode === 87) {
            const newDayMoon = !dayMoon;
            setDayMoon(newDayMoon);
            localStorage.setItem('themePreference', newDayMoon ? 'night' : 'day');
            document.body.style.background = newDayMoon ? '#24272C' : '#E6E7EE';
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        document.body.style.background = dayMoon ? '#24272C' : '#E6E7EE';
    }, [dayMoon]);
    // open close
    const [openClose_1, setOpenClose_1] = useState(true)
    const [openClose_2, setOpenClose_2] = useState(false)
    const [openClose_3, setOpenClose_3] = useState(false)
    const [openClose_4, setOpenClose_4] = useState(false)

    const openFolder_1 = () => { setOpenClose_1(!openClose_1); setOpenClose_2(false); setOpenClose_3(false); setOpenClose_4(false); }
    const openFolder_2 = () => { setOpenClose_2(!openClose_2); setOpenClose_1(false); setOpenClose_3(false); setOpenClose_4(false); }
    const openFolder_3 = () => { setOpenClose_3(!openClose_3); setOpenClose_1(false); setOpenClose_2(false); setOpenClose_4(false); }
    const openFolder_4 = () => { setOpenClose_4(!openClose_4); setOpenClose_1(false); setOpenClose_2(false); setOpenClose_3(false); }

    
    // if (certificate) {
    //     console.log(certificate);
    // }




    return (
        <ThemeContext.Provider value={{
            dayMoon,
            clickBtn,
            // open close
            openClose_1,
            openClose_2,
            openClose_3,
            openClose_4,
            // function
            openFolder_1,
            openFolder_2,
            openFolder_3,
            openFolder_4,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
