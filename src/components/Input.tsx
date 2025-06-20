type Props = React.ComponentProps<"input"> &{
    legend?: string
}

export function Input({legend, type='text', ...rest}: Props){
    return(
        <div className="flex gap-1 flex-col mr-4">
                {legend && <legend className="text-gray-300">{legend}</legend>}
                <input type={type} {...rest} className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
        </div>
    )
}