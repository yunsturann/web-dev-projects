import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const CardForm = () => {
  return (
    <form className="w-full max-w-[400px] flex flex-col gap-4">
      <Input label="Cardholder name" placeholder="e.g. Yunus Turan" />
      <Input label="Card number" placeholder="e.g. 1234 5678 9123 0000" />

      <div className="flex justify-between items-center gap-3">
        {/* DATE SECTION */}
        <div className="flex flex-col gap-1 basis-1/2">
          <p className="text-very-dark-violet uppercase font-medium text-sm tracking-wider">
            EXP.DATE(MM/YY)
          </p>
          {/* INPUTS IN DATE */}
          <div className="flex gap-1.5">
            <Input placeholder="MM" type="number" />
            <Input placeholder="YY" type="number" />
          </div>
          {/*ERROR MESSAGE */}
        </div>
        {/* CVC SECTION */}
        <div className="basis-1/2">
          <Input label="CVC" placeholder="e.g. 123" />
        </div>
      </div>

      <Button>Confirm</Button>
    </form>
  );
};

export default CardForm;
