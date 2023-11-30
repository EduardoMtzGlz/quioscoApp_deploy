"use client"
import { useQuiosco } from "../context/QuioscoProvider"
import ResumenProducto from "../components/ResumenProducto"
import Modal from 'react-modal';
import ModalContenido from "../components/ModalContenido";



const Resumen = () => {
  const {pedido, modal} = useQuiosco()

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
  
    <div>
    
      <h1 className="text-4xl font-black">Revisa tu pedido</h1>

      
        {pedido.length ? (
          pedido.map(producto=> (
            <ResumenProducto
              key={producto.id}
              producto= {producto}
            />
          ))
        ): (
          <p className="text-center text-2xl text-indigo-600 font-bold mt-15">No hay pedidos</p>
        )}

        {modal && (
              <Modal
                isOpen={modal}
                style={customStyles}
              >
                <ModalContenido/>
              </Modal>
            )}              

      
    </div>

    </>
  )
}

export default Resumen