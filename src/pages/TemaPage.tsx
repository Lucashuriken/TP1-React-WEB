export default function TemaPage() {
  function handleMudarTema(cor: string) {
    console.log(`Novo tema selecionado: ${cor}`);
  }

  return (
    <div>
      <h2>Seleção de Tema</h2>

      {/* 
        Usamos Arrow Function porque se fizermos:
        onClick={handleMudarTema("Azul")}
        a função será executada imediatamente na renderização.
      */}

      <button onClick={() => handleMudarTema("Azul")}>
        Azul
      </button>

      <button onClick={() => handleMudarTema("Verde")}>
        Verde
      </button>

      <button onClick={() => handleMudarTema("Vermelho")}>
        Vermelho
      </button>
    </div>
  );
}
