"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useQuiosco } from "../context/QuioscoProvider"
import Categoria from "./Categoria"

const Sidebar = () => {
    const {categorias} = useQuiosco()

    const ruta = usePathname()
     
  return (
    <>
        <Image width={100} height={100} src="/assets/img/logo.svg" alt="logo" className="mx-auto"/>
        <nav className={`${ruta === "/admin" ? "hidden" : "mt-10"}`}>
           {categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria= {categoria}
              
            />
           ))}
        </nav>

    </>
  )
}

export default Sidebar