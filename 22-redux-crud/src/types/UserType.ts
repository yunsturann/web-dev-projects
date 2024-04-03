// ** Third Party Libraries
import * as yup from "yup";

// ** Schemas
export const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  email: yup.string().email().required("Email is required"),
  address: yup.string().max(255, "Address is too long"),
  city: yup.string().required("City is required"),
  phone: yup.string().required("Phone is required"),
  birthdate: yup.string().nullable(),
  gender: yup.string().nullable(),
});

export type UserType = yup.InferType<typeof userSchema>;

export type UserTypeWithId = UserType & { _id?: string };
