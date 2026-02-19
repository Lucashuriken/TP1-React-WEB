import { useState } from "react";

export default function VisibilidadePage() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <h2>Mostrar / Ocultar Senha</h2>

      <input type={visivel ? "text" : "password"} />

      <button onClick={() => setVisivel(prev => !prev)}>
        Mostrar/Ocultar
      </button>
    </div>
  );
}
