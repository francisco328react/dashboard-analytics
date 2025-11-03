"user client"

import { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
})

export function ThemeProvider() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if(stored === "dark") setTheme("dark");
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (theme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}