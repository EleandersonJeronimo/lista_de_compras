import icon from "../assets/Icon.svg"
import '../index.css'

export function Header(){
    return(
        <div className="w-full flex flex-col items-center">
            <img src={icon} alt="icone do projeto" className="w-20 h-20" />
            <header className="w-full flex flex-col items-center p-3">
                <h1 className="font-bold text-3xl">Lista de compras</h1>
                <p className="text-gray-400">Facilite sua ida ao supermercado!</p>
            </header>
        </div>
    )
}