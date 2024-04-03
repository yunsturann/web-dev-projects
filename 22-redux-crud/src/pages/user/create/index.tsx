// ** React
import React from "react";

// ** Custom Components
import Container from "@/components/Container";
import UserForm from "@/components/user-form/UserForm";

// ** Types
import { UserTypeWithId } from "@/types/UserType";

const initialFormValues: UserTypeWithId = {
  name: "",
  surname: "",
  email: "",
  address: "",
  city: "",
  birthdate: null,
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
