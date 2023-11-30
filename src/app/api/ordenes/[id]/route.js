import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function POST(request, {params}){  

    const actualizarTarea = await prisma.orden.update({
        where: {
            id: Number(params.id)
        }, 
        data: {
            estado:true
        }
    })
    return NextResponse.json(actualizarTarea)
}