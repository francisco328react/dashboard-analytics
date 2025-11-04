"use client";

import { createContext, useEffect, useState, ReactNode, startTransition } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (typeof window === "undefined") return;

        // const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        // if (stored && stored !== theme) {
        //     startTransition(() => {
        //         setTheme(stored);
        //     });
        // }
    }, [theme]);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme])

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}