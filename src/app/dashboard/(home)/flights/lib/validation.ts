import z from "zod";

export const formFlightSchema = z.object({
  planeId: z.string({ required_error: "Pesawat tidak boleh kosong" }),
  price: z.string({ required_error: "harga tiket tidak boleh kosong" }),
  departureCity: z.string({
    required_error: "kota keberangkatan tidak boleh kosong",
  }),
  departureDate: z.date(),
  departureCityCode: z
    .string({ required_error: "Kode kota tidak boleh kosong" })
    .min(3, {
      message:
        "Kode Kota keberangkatan harus memiliki panjang minimal 3 karakter"
    })
    .max(3, {
         message:
        "Kode Kota keberangkatan harus memiliki panjang maksimal 3 karakter"
    }),
     destinationCity: z.string({
    required_error: "kota tujuan tidak boleh kosong",
  }),
  arrivalDate: z.date(),
  destinationCityCode: z
    .string({ required_error: "Kode kota tujuan tidak boleh kosong" })
    .min(3, {
      message:
        "Kode Kota tujuan harus memiliki panjang minimal 3 karakter"
    })
    .max(3, {
         message:
        "Kode Kota tujuan harus memiliki panjang maksimal 3 karakter"
    }),
});
 