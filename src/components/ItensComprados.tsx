// ItensComprados.tsx

import lixo from "../assets/Trash-Icon.svg";
import check from "../assets/Done-Icon.svg"; 
import type { Item } from "../types";

type Props = {
  itens: Item[];
  onToggle: (nomeDoItem: string) => void;
  onDelete: (nomeDoItem: string) => void;
};

export function ItensComprados({ itens, onToggle, onDelete }: Props) {
  if (itens.length === 0) {
    return null; // Não renderiza a seção se não houver itens comprados
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">Itens já comprados</h2>
      <div className="flex w-full flex-col gap-3">
        {itens.map((item) => (
          <div key={item.nome} className="flex items-center gap-4 p-2">
            {/* O "checkbox" aqui é um ícone de check, mas ainda funciona para marcar/desmarcar */}
            <button onClick={() => onToggle(item.nome)} className="hover:opacity-75">
                <img src={check} alt="Item comprado" className="h-5 w-5"/>
            </button>
            <div className="flex-grow">
              <span className="font-medium text-gray-400 line-through">{item.nome}</span>
            </div>
            <span className="text-gray-400 text-sm line-through">{item.quantidade} un.</span>
            <button onClick={() => onDelete(item.nome)} className="hover:opacity-75">
              <img src={lixo} alt="Deletar item" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}