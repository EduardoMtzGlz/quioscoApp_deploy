"use client"
import { useEffect } from "react"
import { useQuiosco } from "../context/QuioscoProvider"
import { formatearDinero } from "../helpers"


const Total = () => {

  const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

  //Comprueba si el pedido esta vacio o no
  const comprobarPedido = () => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3
  }

  //Revisa ambas variables
  useEffect(()=> {
    comprobarPedido()
  }, [pedido, nombre])

  

  return (
    <div>
      <h1 className="text-4xl font-black ">Total y Confirmar pedido</h1>
      <p className="text-2xl my-10 ">Confirma tu pedido a continuación</p>
      
      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label 
            className="block uppercase text-slate-800"
            htmlFor="nombre"            >
          Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className=" mt-10 ">
          <p className="text-2xl">Total a pagar : <span className="font-bold text-amber-500">{formatearDinero(total)}</span> </p>
        </div>

        <div>
          <input
            value="Confirmar Pedido"
            type="submit"
            className={`${comprobarPedido() ? "bg-indigo-100 text-gray-400 " : "bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold   text-center mt-5  transition-colors `}
            disabled={comprobarPedido()}

          />
        </div>
      </form>
    </div>
  )
}

export default Total