"use client"

import type { ColumnDef } from "@tanstack/react-table";
import { Airplane, Flight,Flightseat } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Link, Pencil } from "lucide-react";

export type FlightsColumn = Flight & {
    plane: Airplane,
    seats: Flightseat[]
}

 
export const columns: ColumnDef<FlightsColumn>[] = [
    {
        accessorKey: 'planeId',
        header: 'Pesawat',
        cell: ({row}) => {
            const flight = row.original

            return 'Pesawat'
        }
    },

    {
        accessorKey: 'departureCity',
        header: 'Rute',
        cell: ({row}) => {
            const flight = row.original

            return 'Rute'
        }

    },

    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({row}) => {
            const flight = row.original

            return 'Price'
        }
    },

      {
        id: "actions",
        cell: ({row}) => {
            const flight = row.original

            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant='secondary' size='sm' asChild>
                        <Link href={`/dashboard/flights/edit/${flight.id}`}>
                        <Pencil className="mr-2 h-4 w-4"/>
                        EDIT 
                        </Link>
                    </Button>
                    {/* <DeleteAirplane id={plane.id}/>  */}

                </div>
            )
        }
    }
]