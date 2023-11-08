import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';  //for data validation
import prisma from "@/prisma/client";

const createBugSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
})

export async function POST (request: NextRequest){
   const body = await request.json();
   const validation = createBugSchema.safeParse(body);
   if (!validation.success){
    return NextResponse.json(validation.error.errors, {status: 400});}

   const NewBug =   await prisma.debug.create({
    data: {title: body.title, description: body.description}
   });
   return NextResponse.json(NewBug, {status: 201})   // 201 code means object

}