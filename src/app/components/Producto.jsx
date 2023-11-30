import Image from "next/image";
import { formatearDinero } from "../helpers";
import { useQuiosco } from "../context/QuioscoProvider";

const Producto = ({articulo}) => {
    const {nombre, precio, imagen} = articulo;

    const { handleSetProducto, handleChangeModal} = useQuiosco()
    return (
    <div className="border p-3">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen ${nombre}`} 
            width={400} 
            height={500}
        />
        <div>
            <h3 className="font bold text-2xl">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">            
            {formatearDinero(precio)}            
            </p>
            <button 
                type="button" 
                className="bg-indigo-500 p-1 mt-3 rounded w-full hover:bg-indigo-600 cursor-pointer transition-colors text-white uppercase font-bold text-xl"
                onClick={()=> {
                    handleChangeModal()
                    handleSetProducto(articulo)

                    }} 
                >Agregar
            </button>
        </div>
        
    </div>
  )
}

export default Producto