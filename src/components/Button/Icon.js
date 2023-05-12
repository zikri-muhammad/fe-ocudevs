import Image from "next/image";

export default function ButtonIcon({ click, className, icon, active}) {
    return (
        <button onClick={click} className={`p-2 cursor-pointer hover:opacity-80 w-8 h-8 rounded-full shadow-md flex justify-center items-center 
        ${active && "!bg-primary"}
        ${className}`}
        >
            <Image className="w-full h-full" alt="icon" src={require(`@/assets/icons/${icon}`)} />
        </button>
    )
}