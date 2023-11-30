"use client"

import axios from "axios"
import useSWR from "swr"
import Orden from "../components/Orden"

const Admin = () => {
  const fetcher =() => axios("/api/ordenes").then(datos => datos.data)
  const {data, error, isLoading} = useSWR("/api/ordenes", fetcher, {refreshInterval:100})
  

  return (
    <div>
      <h1 className="text-center uppercase text-3xl text-indigo-500 font-bold">Panel de administración</h1>
      <p className="text-center mt-3 font-semibold text-xl mb-4">Administra las ordenes</p>

     
        {data && data.length ? data.map(orden => (
          <Orden 
            orden={orden}
            key= {orden.id}
          />
        )) : <p>No hay ordenes pendientes</p>}
      
    </div>
  )
}

export default Admin