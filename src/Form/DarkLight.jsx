import { createContext, useState } from "react"


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, SetTheme] = useState('dark');
    const handleToggletheme = () => {
        SetTheme((prevtheme) => (prevtheme == 'dark' ? 'light' : 'dark'));
    };
    return (<ThemeContext.Provider value={{ theme, handleToggletheme }}>{children}</ThemeContext.Provider>)

}