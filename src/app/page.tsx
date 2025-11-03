import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] space-y-6 text-center">
      <h2 className="text-3xl font-bold">Bem-vindo ao Dashboard Analytics</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-lg">
        Este projeto demonstra boas práticas com Next.js, TypeScript e Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <Button variant="primary">Acessar Dashboard</Button>
        <Button variant="secondary">Fazer Login</Button>
      </div>
      <Card className="mt-8 w-full max-w-md">
        <p>Modo {typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "Escuro" : "Claro"} ativo.</p>
      </Card>
    </section>
  );
}

