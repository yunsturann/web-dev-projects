import React from "react";
import InputWithLabel from "../ui/InputWithLabel";

const Step1 = () => {
  return (
    <div className="h-full">
      <form className="space-y-2 sm:space-y-4 lg:space-y-6">
        <InputWithLabel label="Name" placeholder="e.g. Yunus Turan" />
        <InputWithLabel
          label="Email Address"
          placeholder="e.g. ynstrn@gmail.com"
        />
        <InputWithLabel label="Phone Number" placeholder="e.g. 555 444 33 22" />
      </form>
    </div>
  );
};

export default Step1;
