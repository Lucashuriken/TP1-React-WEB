import { useState } from "react";

export default function KeyboardPage() {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [textoConfirmado, setTextoConfirmado] = useState("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setTextoConfirmado(textoDigitado);
    }
  }

  return (
    <div>
      <h2>Evento de Teclado</h2>

      <input
        value={textoDigitado}
        onChange={(e) => setTextoDigitado(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p>{textoConfirmado}</p>
    </div>
  );
}
