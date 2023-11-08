
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';  //for data validation check if client sent invalid data
import prisma from "@/prisma/client";

const createBugSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
})

export async function POST (request: NextRequest){
   const body = await request.json();
   const validation = createBugSchema.safeParse(body);

   // validation start here's
   if (!validation.success){
    return NextResponse.json(validation.error.errors, {status: 400});}

    //400 code means client sent invalid data

   const NewBug =   await prisma.debug.create({
    data: {title: body.title, description: body.description}
   });
   return NextResponse.json(NewBug, {status: 201})   // 201 code means object created (issue created) and stored in table

}