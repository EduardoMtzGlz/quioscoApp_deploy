"use client"
import { useQuiosco } from "./context/QuioscoProvider"
import Modal from 'react-modal';
import Producto from "./components/Producto"
import ModalContenido from "./components/ModalContenido";


export default function Home() {
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


