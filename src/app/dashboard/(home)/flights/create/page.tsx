import { Metadata } from "next";
import React, { type FC } from "react";
import FormFlight from "../components/form-flights";
import { getAirplane } from "../../airplanes/lib/data";

// interface createFlightProps {

// }

export const metadata : Metadata = {
    title: 'Dashboard | create data flight'
};



const createFlight: FC = async () => {
  const airplanes = await getAirplane()


  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Flights

        </div>
      </div>
    <FormFlight airplanes={airplanes}/>
    </div>
  );
};

export default createFlight;
