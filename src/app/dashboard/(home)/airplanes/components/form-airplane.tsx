"use client";

import React, { useActionState, type FC } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { saveAirplane, updateAirplane } from "../lib/actions";
import { useFormStatus } from "react-dom";
import type { Airplane } from "@prisma/client";

interface FormAirplaneProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      Submit
    </Button>
  );
};

const FormAirplane: FC<FormAirplaneProps> = ({ type, defaultValues }) => {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) => updateAirplane(null, defaultValues?.id!!, formData)

  const [state, formAction] = useActionState(type === "ADD" ? saveAirplane : updateAirplaneWithId  , initialFormState);

  return (
    <form action={formAction} className="w-[40%] space-y-4">
      {state.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white ">
          <div className="mb-4 font-bold">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value} </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="code">Code</Label>
        <Input placeholder="Kode pesawat..." name="code" id="code" defaultValue= {defaultValues?.code } required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input placeholder="Nama pesawat..." name="name" id="name" defaultValue = {defaultValues?.name}required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="code">Upload Foto</Label>
        <Input
          type="file"
          placeholder="Upload Poto..."
          name="image"
          id="image"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default FormAirplane;
