import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const obtenerOrdenes = await prisma.orden.findMany({
        where:{
            estado:false
        }
    })
    return NextResponse.json(
        obtenerOrdenes
    )
}

//Función para crear datos en una base de datos
export async function POST(request){   
    //Se extrajeron las variables
    const {nombre, pedido, fecha, total} = await request.json()
    
    //Se almacena en la base de datos con axios 
    const orden = await prisma.orden.create({
        data: {
            nombre, 
            total, 
            pedido, 
            fecha
        }
    })
    
    return NextResponse.json(orden)
}


