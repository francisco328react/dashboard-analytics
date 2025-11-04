"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const JWT_SECRET = "meusegredo123";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
        queueMicrotask(() => setUser(decoded.email));
      } catch {
        localStorage.removeItem("token");
      }
    }
  }, []);

  async function login(email: string, password: string) {
    if (email === "admin@teste.com" && password === "123456") {
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
      localStorage.setItem("token", token);
      setUser(email);
      router.push("/dashboard");
    } else {
      alert("Credenciais inválidas!");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
