 "use server"
 
 import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
 import { airplaneFormSchema } from "./validation";
 import  {redirect} from "next/navigation";
import { uploadFile } from "@/lib/supabase";
import prisma from "../../../../../../lib/prisma";

export async function getAirplaneById(id: string) {
    try {
        const data = await prisma.airplane.findFirst({
            where: {
                id: id
            },
        }); 
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function saveAirplane(Prevstate: any, formData: FormData): Promise<ActionResult> {
    const values = airplaneFormSchema.safeParse({
        name: formData.get("name"),
        image: formData.get("image"),
        code: formData.get("code")
    }) 

    if (!values.success) {
        const errorDesc = values.error.issues.map(issue => issue.message)

        return {
            errorTitle: 'Error validation',
            errorDesc  
            
        };
    }

    const uploadedFile = await uploadFile(values.data.image)

    console.log(uploadFile);

    if (uploadedFile instanceof Error) {
        return {
            errorTitle: 'Failed to upload file',
            errorDesc: ['Terjadi masalah pada koneksi,silahkan coba lagi']
        }
    }

    try {
        const data = await prisma.airplane.create({
            data: {
                name: values.data.name,
                code: values.data.code, 
                image: uploadedFile as string 
            }
        })
    } catch (error) {

        console.log(error);
            
        return {
            errorTitle: 'Failed to insert data',
            errorDesc: ['terjadi masalah pada koneksi, silahkan coba lagi']
        }
    }

    
    redirect('/dashboard/airplanes')
}