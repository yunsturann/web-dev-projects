// ** React
import React, { useEffect, useState } from "react";

// ** Next
import { useRouter } from "next/router";

// ** Custom Components
import Container from "@/components/Container";
import UserForm from "@/components/user-form/UserForm";

//** Types

// ** Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getUser } from "@/store/user-slice";

const UpdateUserPage = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (router.query.id) dispatch(getUser({ _id: router.query.id as string }));
  }, [dispatch, router.query.id]);

  if (!user) return null;

  return (
    <section className="flex-1 flex items-center">
      <Container>
        <UserForm initialData={user} />
      </Container>
    </section>
  );
};

export default UpdateUserPage;
