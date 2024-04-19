"use client";
/* eslint-disable react-hooks/exhaustive-deps */
// ** React
import React, { FC, FormEvent, useEffect, useState } from "react";

// ** Nextjs
import { useRouter } from "next/navigation";

// ** Third Party Components
import toast from "react-hot-toast";
import { SyncLoader } from "react-spinners";
import { motion } from "framer-motion";

// ** Actions
import { createNewBoard, createTask } from "@/actions/board-actions";

// ** Custom Components
import Input from "../ui/Input";
import Button from "../ui/Button";

interface OnboardingFormProps {
  user: string | null | undefined;
  boardId: string | null;
}

// Framer motion variants
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const MotionDiv = motion.div;

const OnboardingForm: FC<OnboardingFormProps> = (props) => {
  const { user, boardId } = props;
  const router = useRouter();
  // ** states
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (boardId !== null) {
      router.replace("/mykanban");
    }
  }, []);

  // check if there is a boardid if true router replace to /mykanban
  const stepOneSubmit = () => {
    setStep(2);
  };

  const stepTwoSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.replace("/mykanban");
      toast.success(`Welcome to your new board ${user}`);
      setLoading(false);
    }, 2500);
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variant}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full items-center justify-center pt-[82px] w-[90%] mx-auto max-w-[1450px] text-white"
    >
      {step === 1 && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold uppercase">
            Hey {user} 👋 Lets Give Your Board a Name!
          </h1>
          <form
            className="flex flex-col items-center gap-10"
            action={createNewBoard}
            onSubmit={stepOneSubmit}
          >
            <Input
              type="text"
              name="boardName"
              placeholder="My Board Name..."
              disabled={loading}
            />
            <Button text="Continue" type="submit" />
          </form>
        </MotionDiv>
      )}
      {/* STEP 2 */}
      {step === 2 && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold uppercase">
            Now Lets Add your first task! 🤗
          </h1>
          <form
            action={createTask}
            onSubmit={stepTwoSubmit}
            className="flex flex-col gap-10 items-center"
          >
            <Input
              type="text"
              name="task"
              placeholder="My First Task..."
              disabled={loading}
            />

            <Input type="hidden" name="boardId" value={boardId!} />

            <div className="flex justify-between mb-10 w-4/5">
              <Button
                text="&#8592; Go Back"
                onClick={goBack}
                disabled={loading}
              />
              <Button text="Continue" type="submit" disabled={loading} />
            </div>
            {loading ? (
              <div className="flex items-center gap-3 text-white">
                <SyncLoader color="#fff" />
                <span>Getting Your Board Ready</span>
              </div>
            ) : null}
          </form>
        </MotionDiv>
      )}
    </MotionDiv>
  );
};

export default OnboardingForm;
