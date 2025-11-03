import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition ${className}`}
        >
            {children}
        </div>
    )
}