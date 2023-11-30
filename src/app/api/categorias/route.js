import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(){
    const categoria = await prisma.categoria.findMany({
        include: {
            productos:true
        }
    })
    return NextResponse.json(categoria)
}