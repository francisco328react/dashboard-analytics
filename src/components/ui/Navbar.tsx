"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-md">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Dashboard Analytics
            </h1>
            <ThemeToggle />
        </nav>
    )
}