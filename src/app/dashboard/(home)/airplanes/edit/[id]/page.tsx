// src/app/dashboard/(home)/airplanes/edit/[id]/page.tsx
import React, { type FC} from "react";
import FormAirplane from "../../components/form-airplane";
import { getAirplaneById } from "../../lib/actions";

type Params = {
    id : string;
}
interface EditAirplanePageProps {
    params: Params
}

const EditAirplanePage : FC<EditAirplanePageProps> = async ({params}) => {
    const resolvedParams = await params;
    const airplaneId = resolvedParams.id;

   

    const data = await getAirplaneById(airplaneId);

    // Anda juga bisa menambahkan penanganan jika data tidak ditemukan
 
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">
                    Edit Data Airplane
                </div>
            </div>
            {/* Meneruskan data yang diambil ke FormAirplane sebagai defaultValues */}
            <FormAirplane type="EDIT" defaultValues={data}/>
        </div>
    )
}

export default EditAirplanePage ;