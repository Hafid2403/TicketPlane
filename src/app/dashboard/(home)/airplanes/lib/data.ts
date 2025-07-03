"use server"
 import prisma from "../../../../../../lib/prisma"
export async function getAirplane() {
    try {
            const plane = await prisma.airplane.findMany({})

            return plane
    } catch (error) {
        console.log('Database Error', error);
        return[]
    }
}