import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/ui/Navbar";


export const metadata = {
  title: "Dashboard Analytics",
  description: "Modern data analytics dashboard with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="main-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto p-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
