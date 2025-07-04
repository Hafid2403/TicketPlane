import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import React, {  type FC } from "react";
import Link from "next/link";
import { columns } from "./components/column-flights";
import { getFlights } from "./lib/data";

interface flightsProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | Flight'
}

const flightPage: FC = async () => {

    const data = await getFlights();

    return (
        <>
         <div className="flex flex-row items-center justify-between">
            <div className="my-5 text-2xl font-bold">
                Airplane
            </div>
            <Button asChild>
                <Link href={'/dashboard/flights/create'}>
                    <Plus className="mr-2 h-4 2-4"/>
                    Tambah Data 
                </Link>
            </Button>
        </div>
        <DataTable columns={ columns } data={data}/>
        </>
    )
}

export default flightPage