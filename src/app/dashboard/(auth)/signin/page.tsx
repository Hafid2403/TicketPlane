
import { Metadata } from "next";
import React, { FC } from "react";
import FormSignIn from "./form/index";

interface SigninPageProps {

}

export const metadata: Metadata = {
    title :' Dashboard | Sign in '
}


const SigninPage: FC<SigninPageProps> = ({ }) => {
    
    return (
       <FormSignIn/>
    )   
}

export default SigninPage;