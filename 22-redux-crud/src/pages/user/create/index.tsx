// ** React
import React from "react";

// ** Custom Components
import Container from "@/components/Container";
import UserForm from "@/components/user-form/UserForm";
import { IUser } from "@/types/UserType";

const initialFormValues: IUser = {
  name: "",
  surname: "",
  email: "",
  address: "",
  city: "",
  birthdate: new Date(),
  phone: "",
  gender: null,
};

const CreateUserPage = () => {
  return (
    <section className="flex-1 flex items-center">
      <Container>
        <UserForm initialData={initialFormValues} />
      </Container>
    </section>
  );
};

export default CreateUserPage;
