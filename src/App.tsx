import { useState } from "react"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import './index.css'
import { ItensComprados } from "./components/ItensComprados"
import type { Item } from "./types"

export function App() {
  const [item, setItem] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [lista, setLista] = useState<Item[]>([
    { nome: 'Leite', quantidade: 1, status: 'pendente' },
    { nome: 'Maçã', quantidade: 5, status: 'pendente' },
    { nome: 'Refrigerante', quantidade: 2, status: 'comprado' },
  ])


  function handleAddItem(){
    if(!item.trim()) return

    const novoItem = {
      nome: item,
      quantidade: Number(quantidade),
      status: 'pendente' as const,
    }

    setLista(prev => [...prev, novoItem])
    setItem('')
    setQuantidade('')
  }

  function handleToggleStatus(nomeDoItem: string) {
    const novaLista = lista.map(item => {
      if (item.nome === nomeDoItem) {
        return { ...item, status: item.status === 'pendente' ? 'comprado' : 'pendente' } as Item;
      }
      return item;
    });
    setLista(novaLista);
  }

  // Dentro do componente App

function handleQuantidadeChange(e: React.ChangeEvent<HTMLInputElement>) {
  const novoValor = e.target.value;

  // Permite que o campo fique vazio (para o usuário poder apagar)
  // mas não atualiza o estado se o valor for um número negativo.
  if (novoValor === '' || Number(novoValor) >= 0) {
    setQuantidade(novoValor);
  }
}

  function handleDeleteItem(nomeDoItem: string) {
    const novaLista = lista.filter(item => item.nome !== nomeDoItem);
    setLista(novaLista);
  }

  const itensPendentes = lista.filter(item => item.status === 'pendente');
  const itensComprados = lista.filter(item => item.status === 'comprado');

  return (
    <div className="w-full h-full flex justify-center items-center bg-blue-100">
      <main className="bg-white rounded-2xl p-8 m-10 w-full max-w-2xl shadow-lg">
        <Header />
        <div className="flex justify-center items-end">
          <Input legend="Item" value={item} onChange={(e) => setItem(e.target.value)}/>
          <Input legend="Quantidade" type="number" value={quantidade} min={0} onChange={handleQuantidadeChange}/>
          <Button text="+" onClick={handleAddItem}/>
        </div>
        <List itens={itensPendentes}
          onToggle={handleToggleStatus}
          onDelete={handleDeleteItem}
        />

        <ItensComprados itens={itensComprados}
          onToggle={handleToggleStatus}
          onDelete={handleDeleteItem}/>
      </main>
    </div>
  )
}
