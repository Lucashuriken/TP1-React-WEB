import { useState } from "react";

export default function FormularioPage() {
  const [biografia, setBiografia] = useState("");
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Formulário Controlado</h2>

      <textarea
        value={biografia}
        onChange={(e) => {
          setBiografia(e.target.value);
          setContador(e.target.value.length);
        }}
        rows={5}
        cols={40}
      />

      <p>Quantidade de caracteres: {contador}</p>
    </div>
  );
}
