import { useState } from "react";

export default function EventosPage() {
  const [count, setCount] = useState(0);

  function mostrarMensagem() {
    console.log("Mensagem React");
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h2>Eventos - React</h2>

      <button onClick={mostrarMensagem}>
        Mensagens no console: {count}
      </button>
    </div>
  );
}
