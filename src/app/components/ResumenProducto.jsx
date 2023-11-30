import Image from "next/image"
import { useQuiosco } from "../context/QuioscoProvider"
import { formatearDinero } from "../helpers"

const ResumenProducto = ({producto}) => {
    const {handleEditarCantidades, handleEliminarProducto} = useQuiosco()

    return (
    <div className=' shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>
            <Image
                width={300}
                height={400}
                alt={`Imagen de ${producto.nombre}`}
                src= {`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className='md:w-4/6'>
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
            <p className="mt-2 text-gray-700 font-bold text-lg">Precio: {formatearDinero(producto.precio )} </p>
            <p className="mt-2 text-amber-500 font-bold text-xl">Subtotal: {formatearDinero(producto.precio * producto.cantidad)} </p>
        </div>
        <div className="md:w-1/6">
            <button
                type="button"
                className="bg-sky-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full hover:bg-sky-800 transition-colors justify-center mb-2 gap-2"
                onClick={()=> {handleEditarCantidades(producto.id)}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

            Editar</button>
            <button
                type="button"
                className="bg-red-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full hover:bg-red-800 transition-colors justify-center gap-2"
                onClick={() => {handleEliminarProducto(producto.id)}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            Eliminar</button>
        </div>
    </div>
  )
}

export default ResumenProducto