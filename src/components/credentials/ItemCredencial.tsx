import { useState } from "react";
import type { Credencial } from '../../hooks/useCredenciais'

interface Props extends Credencial {
  onDelete: (id: number) => void;
}

export default function ItemCredencial({
  id,
  usuario,
  senha,
  onDelete
}: Props) {
  const [visivel, setVisivel] = useState(false);

  return (
    <li>
      <strong>{usuario}</strong> -{" "}
      {visivel ? senha : "********"}

      <button onClick={() => setVisivel(prev => !prev)}>
        Mostrar/Ocultar
      </button>

      <button onClick={() => onDelete(id)}>
        Excluir
      </button>
    </li>
  );
}
