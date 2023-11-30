import Image from "next/image"
import { useEffect, useState } from "react"
import { useQuiosco } from "../context/QuioscoProvider"
import { formatearDinero } from "../helpers"


const ModalContenido = () => {

    const {producto, handleChangeModal, handleAgregarPedido, pedido} = useQuiosco()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    //Comprobar que el modal actual este en el pedido
    useEffect(()=>{
      if(pedido.some(pedidoState => pedidoState.id === producto.id)){
        const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
      }
    }, [pedido, producto])

  return (

    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image alt={`Imagen de ${producto?.nombre}`} width={300} height={400} src={`/assets/img/${producto?.imagen}.jpg`} className="rounded"/>
      </div>
      <div className="md:w-2/3">
        <div
          className="flex justify-end"
        >
          <button
            type="button"
            onClick={()=> {handleChangeModal()}}
            
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto?.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto?.precio)}</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={()=> {
              if(cantidad <= 1) return
              setCantidad(cantidad -1)}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button
            type="button"
            onClick={()=>{
              if(cantidad >= 5) return
              setCantidad(cantidad +1)}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div> 
        <button 
          type="button" 
          className="bg-indigo-500 p-2 my-5 rounded w-full hover:bg-indigo-600 text-white text-xl transition-colors"
          onClick={()=> handleAgregarPedido({...producto, cantidad})}
        
          >{edicion ? "Guardar Cambios" : "Añadir al pedido"}</button>         
      </div>
       

    </div>
    
  )
}

export default ModalContenido