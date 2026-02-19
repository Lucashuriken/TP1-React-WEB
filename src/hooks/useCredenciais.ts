import { useState } from "react";

export interface Credencial {
  id: number;
  usuario: string;
  senha: string;
}

export function useCredenciais() {
  const [credenciais, setCredenciais] = useState<Credencial[]>([]);

  function adicionar(usuario: string, senha: string) {
    const nova: Credencial = {
      id: Date.now(),
      usuario,
      senha
    };

    setCredenciais(prev => [...prev, nova]);
  }

  function remover(id: number) {
    setCredenciais(prev =>
      prev.filter(c => c.id !== id)
    );
  }

  return { credenciais, adicionar, remover };
}
