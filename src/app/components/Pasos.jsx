"use client"
import {useRouter, usePathname} from "next/navigation"


const pasos = [
    {paso: 1, nombre: "Menú", url:"/"},
    {paso: 2, nombre: "Resumen", url:"/resumen"},
    {paso: 3, nombre: "Total", url:"/total"}
]

const Pasos = () => {
    
    
    const router = useRouter()

    const ruta = usePathname()

    const calcularProgreso = ()=> {
        let valor 
        if(ruta === "/" ){
            valor= 2
        }else if(ruta === "/resumen"){
            valor = 50
        }else if(ruta === "/total"){
            valor =100
        }

        return valor
    }




    
    
  return (
    <>
        <div className={ `${ruta === "/admin" ? "hidden" : "flex justify-between mb-5 p-2" }`} >
            {pasos.map(paso => (                
                <button 
                    key={paso.paso}
                    className="font-bold text-2xl "
                    onClick = {()=> {
                        router.push(paso.url)
                      
                    }} 
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center" 
            style={{ width: `${calcularProgreso()}%`}}
            >

            </div>
        </div>
    </>
  )
}

export default Pasos