import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(){
    const productos = await prisma.producto.findMany({})
    return NextResponse.json(productos)
}