"use client"
import Pasos from "../components/Pasos"
import Sidebar from "../components/Sidebar"
import { useQuiosco } from "../context/QuioscoProvider"
import Producto from "../components/Producto"
import Modal from 'react-modal';
import ModalContenido from "../components/ModalContenido"


export const Layout = ({props}) => {
  const {categoriaActual, modal} = useQuiosco()

    const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#__next');

  return (
    <>
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
          <Sidebar/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll p-2">
          <Pasos
          />
         
          
          <h1 className="font-bold text-3xl ">{` ${categoriaActual?.nombre}`}</h1>
          <p className="text-2xl my-4">
            Elige y personaliza tu pedido a continuación
          </p>
          <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {categoriaActual?.productos?.map(articulo => (
              <Producto
                key={articulo.id}
                articulo= {articulo}
              /> 
            ))}
          </div>          

            
        </main>

        {modal && (
              <Modal
                isOpen={modal}
                style={customStyles}
              >
                <ModalContenido/>
              </Modal>
            )}
    </>
    

  )
}
