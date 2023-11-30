
import { ToastContainer } from 'react-toastify'
import { QuioscoProvider } from './context/QuioscoProvider'
import './globals.css'
import "react-toastify/dist/ReactToastify.css"

import Sidebar from './components/Sidebar'
import Pasos from './components/Pasos'

export const metadata = {
  title: 'Quiosco Café',
  description: 'Quiosco Cafetería',
}



export default function RootLayout({ children }) { 

  return (
    <html lang="en">
      <body > 
        <QuioscoProvider>
          <div id='__next' className="md:flex"> 
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
              <Sidebar/>
            </aside>
            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll p-2">
              <Pasos/>           
              {children} 
            </main>                                    
          </div> 
          <ToastContainer position="bottom-right"/>                
        </QuioscoProvider> 
      </body>
    </html>
  )
}
