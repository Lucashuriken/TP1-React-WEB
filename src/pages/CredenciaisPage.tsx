import { useCredenciais } from "../hooks/useCredenciais";
import CredencialForm from '../components/credentials/CredencialForm'
import ItemCredencial from '../components/credentials/ItemCredencial'

export default function CredenciaisPage() {
  const { credenciais, adicionar, remover } = useCredenciais();

  return (
    <div>
      <h2>Gerenciador de Credenciais</h2>

      <CredencialForm onSubmit={adicionar} />

      <ul>
        {credenciais.map(c => (
          <ItemCredencial
            key={c.id}
            {...c}
            onDelete={remover}
          />
        ))}
      </ul>
    </div>
  );
}
