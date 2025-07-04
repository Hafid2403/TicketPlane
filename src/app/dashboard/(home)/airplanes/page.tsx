import { Plus } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/colums-table";
import { getAirplane } from "./lib/data";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Dashboard | Airplanes'
}


export default async function AirplanePage () {
    const planes = await getAirplane()

    
    return (
        <>
        <div className="flex flex-row items-center justify-between">
            <div className="my-5 text-2xl font-bold">
                Airplane
            </div>
            <Button>
                <Link href={'/dashboard/airplanes/create'}>
                    <Plus className="mr-2 h-4 2-4"/>
                    Tambah Data 
                </Link>
            </Button>
        </div>
        <DataTable columns={columns} data={planes}/>
        </>
    )
}
