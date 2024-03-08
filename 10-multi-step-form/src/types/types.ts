import { addOnItems, pricingItems } from "@/constants/constants";
import { z } from "zod";

export type PricingItem = (typeof pricingItems)[number];
export type TAddOnsItem = (typeof addOnItems)[number];

export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(1, "This field is required")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email().min(1, "This field is required"),
  //only 10 digit and numbers
  phone: z
    .string()
    .min(1, "This field is required")
    .regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

export type TPersonalInfoSchema = z.infer<typeof personalInfoSchema>;
