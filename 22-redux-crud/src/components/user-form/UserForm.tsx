// ** React
import React, { ChangeEvent, FC, useEffect } from "react";

// ** Types & Schemas
import { UserType, UserTypeWithId, userSchema } from "@/types/UserType";
import { AppDispatch, RootState } from "../../store";

// ** Custom Components
import Input from "../ui/Input";
import Button from "../ui/Button";
import SelectInput from "../ui/SelectInput";

// ** Constants
import { cities } from "@/constants";

// ** Third Party Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postUser, updateUser } from "../../store/user-slice";
import { set } from "mongoose";

// ** Utils
// import { formatPhoneNumber } from "@/lib/utils";

// ** PropType
interface UserFormProps {
  initialData: UserTypeWithId;
}

const UserForm: FC<UserFormProps> = ({ initialData }) => {
  // ** hooks
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({
    resolver: yupResolver(userSchema),
    defaultValues: initialData,
  });

  // ** variables
  const EDIT_MODE = !!initialData._id;
  const { phone: phoneNumber } = watch();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, response, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const pressedKey = phoneNumber?.slice(-1);
    // if not an digit, dont set value
    if (isNaN(Number(pressedKey))) {
      setValue("phone", phoneNumber.slice(0, -1));
      return;
    }
    if (phoneNumber.length === 1) {
      setValue("phone", `(${phoneNumber}`);
      return;
    }
    if (phoneNumber.length === 5) {
      setValue("phone", `${phoneNumber.slice(0, 4)})-${pressedKey}`);
      return;
    }
    if (phoneNumber.length === 10) {
      setValue("phone", `${phoneNumber.slice(0, 9)}-${pressedKey}`);
      return;
    }
  }, [phoneNumber, setValue]);

  // ** Arrow functions
  const onSubmit = async (data: UserType) => {
    if (EDIT_MODE) {
      // update user
      dispatch(updateUser({ ...data, _id: initialData._id }));
    } else {
      // create user
      dispatch(postUser(data));
    }
  };

  return (
    <div className="border border-gray-400 rounded-3xl w-full max-w-3xl mx-auto px-12 py-8 shadow-md">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide mb-4">
        {EDIT_MODE ? "Edit User" : "Create User"}
      </h1>

      <form
        className="flex flex-col gap-y-3 text-lg sm:text-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start gap-x-12">
          <Input
            label="Name"
            required
            placeholder="Yunus"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Surname"
            required
            placeholder="Turan"
            {...register("surname")}
            error={errors.surname?.message}
          />
        </div>

        <Input
          label="Email"
          required
          placeholder="ynstrn@gmail.com"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Address"
          placeholder="Odunpazarı Eskişehir/Turkey"
          {...register("address")}
          error={errors.address?.message}
        />

        {/* CITY & BIRTHDAY Container */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-x-12 gap-y-3">
          {/* CITY DROPDOWN */}
          <SelectInput
            {...register("city")}
            data={cities}
            label="City"
            required
            defaultValue={initialData.city}
            error={errors.city?.message}
          />

          {/* BIRTHDATE */}
          <Input
            {...register("birthdate")}
            label="Birthdate"
            type="date"
            className="flex-1"
            required
            error={errors.birthdate?.message}
          />
        </div>

        <Input
          label="Phone"
          required
          placeholder="(555)-333-2211"
          {...register("phone")}
          error={errors.phone?.message}
          maxLength={14}
        />

        {/* Gender */}
        <div className="flex-1 flex flex-col">
          <label>Gender</label>
          <div className="flex items-center gap-x-8 ml-1">
            {/* Male */}
            <div className="flex gap-x-2">
              <label htmlFor="male">Male</label>
              <input
                {...register("gender")}
                type="radio"
                id="male"
                name="gender"
                value="male"
              />
            </div>
            {/* Female */}
            <div className="flex gap-x-2">
              <label htmlFor="female">Female</label>
              <input
                {...register("gender")}
                type="radio"
                id="female"
                name="gender"
                value="female"
              />
            </div>
          </div>
        </div>

        <Button
          variant="success"
          type="submit"
          className="self-center sm:w-1/2 mt-4"
          disabled={isSubmitting}
        >
          {EDIT_MODE ? "Update" : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
