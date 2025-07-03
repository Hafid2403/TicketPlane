"use client"

import { Airplane } from "@prisma/client"
import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getUrlFile } from "@/lib/supabase"

export const columns: ColumnDef<Airplane> [] = [
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({row}) => {
            const plane = row.original

            return (
                <Image src={getUrlFile(plane.image)} alt="Image Airplane" width={180} height={180}/>
            )
        }
    },
    {
        accessorKey: 'code',
        header: 'code'
    }, 
    {
        accessorKey: 'name',
        header: 'name'
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const plane = row.original

            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant='secondary' size='sm' asChild>
                        <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
                        <Pencil className="mr-2 h-4 w-4"/>
                        EDIT 
                        </Link>
                    </Button>

                </div>
            )
        }
    }
]