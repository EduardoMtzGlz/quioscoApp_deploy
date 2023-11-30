"use client"
import axios from "axios";
import { createContext, useEffect, useState, useContext} from "react";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify"



const QuioscoContext = createContext()

export const QuioscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState("")
    const [total, setTotal] = useState(0)

    const router = useRouter()
    

    const obtenerCategorias = async ()=> {
        const {data} = await axios("/api/categorias")        
        setCategorias(data)
    }

    useEffect(()=> {
        obtenerCategorias()
    }, [])

    //Con este código se define una categoria por defecto 

    useEffect(()=> {
        setCategoriaActual(categorias[0])
    }, [categorias])

    //Calcular el total cada que cambien la variable de pedido 

    useEffect(()=> {
        const nuevoTotal = pedido.reduce( (total, producto) => (producto.precio * producto.cantidad) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id) //Regresa un arreglo con la categoria que tiene un id igual al que se le pasa, se accede directamente al arreglo con la posición [0]
        setCategoriaActual(categoria[0]) 
        router.push("/")
        
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    //Haciendo el destructuring y haciendo una copia del producto se quitan elementos al objeto
    const handleAgregarPedido = ({categoriaId,...producto})=>{     
        if(pedido.some(productoState => productoState.id === producto.id)){
            //Actualizar la cantidad, se tiene que iterar sobre el pedido 
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success("Guardado Correctamente")
        }else{
            setPedido([...pedido, producto])
            toast.success("Agregado al pedido")
        }

        setModal(false)
        
    }

    const handleEditarCantidades = id => {
        const productoActualizar= pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        //Saca el producto del arreglo creando un nuevo arreglo con los productos que tienen un id igual y saca al que sea difeten
        const productoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(productoActualizado)
        toast.error("Eliminado correctamente")
    }

    const colocarOrden = async e => {
        e.preventDefault()

        try {
            //Código para mandar datos vía axios, despues del endpoint se agregan los datos a mandar
            await axios.post("/api/ordenes", {pedido, nombre, total, fecha:Date.now().toString()})

            //Resetear la app            
            setCategoriaActual(categorias[0])           
            setPedido([])
            setNombre("")
            setTotal(0)

            toast.success("Pedido realizado correctamente")

            setTimeout(()=> {
                router.push("/")
            }, 2000)

        } catch (error) {
            console.log(error)
        }
      }


    return (
        <QuioscoContext.Provider
            value = {{
                categorias, 
                handleClickCategoria, 
                categoriaActual, 
                producto,
                handleSetProducto, 
                modal, 
                handleChangeModal, 
                handleAgregarPedido, 
                pedido, 
                handleEditarCantidades, 
                handleEliminarProducto, 
                setNombre, 
                nombre, 
                colocarOrden, 
                total

                
            }}        
        >
            {children}
        </QuioscoContext.Provider>
    )
}

//Se esta creando directamente el hook
export const useQuiosco = () => useContext(QuioscoContext)
