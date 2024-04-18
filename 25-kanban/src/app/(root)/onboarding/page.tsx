// ** React
import React from "react";

// ** Clerk
import { currentUser } from "@clerk/nextjs";
import OnboardingForm from "@/components/onboarding-form/OnboardingForm";

// ** Custom components

const OnboardingPage = async () => {
  const user = await currentUser();
  const username = user?.firstName ?? "";
  return (
    <div className="bg-bg bg-cover h-[102vh] w-full text-white mt-[-75px] relative overflow-hidden">
      <OnboardingForm user={username} />
    </div>
  );
};

export default OnboardingPage;
