"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { formFlightSchema } from "./validation";

export async function SaveFlight(
  PrevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("planeId"));
  
  const departureDate = new Date(formData.get('departureDate') as string)
  const arrivalDate = new Date(formData.get('departureDate') as string)

  const validate = formFlightSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate, 
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issues) => issues.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  redirect("/dashboard/flights/create");
}
