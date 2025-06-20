type Props = React.ComponentProps<"button"> & {
    text?: string
}

export function Button({text, type = 'submit', ...rest}: Props){
    return(
        <button type={type} {...rest} className="flex justify-center items-center border h-10 w-20 rounded-md cursor-pointer bg-purple-300 border-none text-white">{text}</button>
    )
}