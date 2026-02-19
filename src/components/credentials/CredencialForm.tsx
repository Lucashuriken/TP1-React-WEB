import { useState } from "react";

interface Props {
  onSubmit: (usuario: string, senha: string) => void;
}

export default function CredencialForm({ onSubmit }: Props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!usuario || !senha) return;

    onSubmit(usuario, senha);
    setUsuario("");
    setSenha("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}
