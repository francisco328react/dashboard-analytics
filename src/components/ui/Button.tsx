"use client";

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
    const base = "px-4 py-2 rounded-lg font-medium transition focus:outline-none";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer",
    };

    return (
        <button
            {...props}
            className={clsx(base, variants[variant], props.className)}
        >
            {children}
        </button>
    )
}