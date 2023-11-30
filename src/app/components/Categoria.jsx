
import Image from "next/image"
import { useQuiosco } from "../context/QuioscoProvider"

const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria
    const {handleClickCategoria, categoriaActual} = useQuiosco()

    return (
        <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border hover:bg-amber-400 transition-colors p-2 cursor-pointer`}
            onClick={()=>{handleClickCategoria(id)}}
        >
            <Image 
                alt="imagen icono" 
                width={100} 
                height={100} 
                src={`/assets/img/icono_${icono}.svg`} 
                
            />
            <button 
                type="button"
                className="text-2xl font-bold hover:cursor-pointer ml-2"
                
            >
                {nombre}
            </button>
        </div>
  )
}

export default Categoria