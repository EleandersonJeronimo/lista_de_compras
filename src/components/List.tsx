import lixo from "../assets/Trash-Icon.svg"
import type { Item } from "../types"

type Props = {
  itens: Item[];
  onToggle: (nomeDoItem: string) => void;
  onDelete: (nomeDoItem: string) => void;
}

export function List({ itens, onToggle, onDelete }: Props) {
  if(itens.length === 0){
    return null
  }

  return (
    <div className="flex mt-4 w-full flex-col">
      {itens.map((item) => (
        <div key={item.nome} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={item.status === 'comprado'}
            onChange={() => onToggle(item.nome)}
          />
            <span>{item.nome}</span>
            <span className="text-gray-500 text-sm">{item.quantidade}</span>
            <button onClick={() => onDelete(item.nome)}>
              <img src={lixo} alt="" />
            </button>
          </div>
      ))}
    </div>
  )
}
