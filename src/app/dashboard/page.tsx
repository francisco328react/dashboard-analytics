"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo, {user}</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Você está autenticado com sucesso. Em breve adicionaremos gráficos dinâmicos aqui!
      </p>
      <Button variant="secondary" onClick={logout}>
        Sair
      </Button>
    </section>
  );
}
