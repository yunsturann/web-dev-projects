// ** React
import React from "react";

// ** Clerk
import { currentUser } from "@clerk/nextjs";
import OnboardingForm from "@/components/onboarding-form/OnboardingForm";
import { getBoardIdForUser } from "@/actions/get-board-id";

// ** Custom components

const OnboardingPage = async () => {
  const boardId = await getBoardIdForUser();
  const user = await currentUser();

  const username = user?.firstName ?? "";

  return (
    <div className="bg-bg bg-cover h-[102vh] w-full text-white mt-[-75px] relative overflow-hidden">
      <OnboardingForm user={username} boardId={boardId} />
    </div>
  );
};

export default OnboardingPage;
