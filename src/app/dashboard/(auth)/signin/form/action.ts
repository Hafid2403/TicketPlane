"use server"

import { redirect } from "next/navigation"
import { formschema } from "./validation";
import prisma from "../../../../../../lib/prisma";
const bcrypt = require("bcrypt");



export interface ActionResult {
    errorTitle: string | null
    errorDesc: string[] | null
}
export async function HandleSignIn(prevState: any, formData: FormData): Promise<ActionResult> {
    console.log(formData.get('email')); 

    const values = formschema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!values.success) {
        const errorDesc= values.error.issues.map((issue) => issue.message)
 
        return {
            errorTitle: 'Error Validation',errorDesc
        }
    }

    const ExistingUser = await prisma.user.findFirst({
        where: {
            email: values.data.email
            

        }
    })

    if (!ExistingUser) {
        return{
            errorTitle: 'error validation',
            errorDesc: ['email tidak ditemukan']
        }
    }

    const validPassword  = await bcrypt.compare(values.data.password, ExistingUser.password) 

    if (!validPassword) {
        return {
            errorTitle: 'error validation',
            errorDesc: ['password salah']
        }
    }

    return redirect('/dashboard/');
}
