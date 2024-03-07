import { addOnItems, pricingItems } from "@/constants/constants";

export type PricingItem = (typeof pricingItems)[number];
export type TAddOnsItem = (typeof addOnItems)[number];
