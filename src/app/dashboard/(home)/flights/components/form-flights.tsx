"use client";

import { Label } from "@radix-ui/react-label";
import React, { useActionState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import SubmitButtonForm from "../../component/submit-form-button";
import type { Airplane } from "@prisma/client";
import { SaveFlight } from "../lib/action";
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";

interface FormFlightProps {
  airplanes: Airplane[];
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormFlight({ airplanes }: FormFlightProps) {
  const [state, formAction] = useActionState(SaveFlight, initialFormState);

  return (
    <form action={formAction} className="space-y-6">
      {state?.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white ">
          <div className="mb-4 font-bold">{state.errorTitle}</div>

          <ul className="list-disc list-inside"> 
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value} </li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Pilih Pesawat</Label>
          <Select name="planeId">
            <SelectTrigger id="planeId    ">
              <SelectValue placeholder="Pilih Pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga tiket</Label>
          <Input
            placeholder="Harga tiket..."
            name="price"
            id="price"
            type="number"
            min={0}
            required
          />
          <span className="text-xs text-gray-900">
            harga untuk kelas bisnis bertambah Rp 500.000 & kelas first
            bertambah Rp 750.000{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota keberangkatan</Label>
          <Input
            placeholder="kota Keberangkatan..."
            name="departureCity"
            id="departureCity"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">tanggal Keberangkatan</Label>
          <Input
            type="datetime-local"
            placeholder="kota Keberangkatan..."
            name="departureDate"
            id="departureDate"
            className="block"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota..."
            name="departureCityCode"
            id="departureCityCode"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota Tujuan..."
            name="destinationCity"
            id="destinationCity"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            type="datetime-local"
            placeholder="Tanggal Tiba..."
            name="arrivalDate"
            id="arrivalDate"
            className="block"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota ..."
            name="destinationCityCode"
            id="destinationCityCode"
            required
          />
        </div>
      </div>
      <SubmitButtonForm />
    </form>
  );
}
