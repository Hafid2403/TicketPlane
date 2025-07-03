"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"; 

export async function logout() {
 
  (await cookies()).delete("session-token")

  // Redirect ke sign-in page
  redirect("/dashboard/signin")
}
