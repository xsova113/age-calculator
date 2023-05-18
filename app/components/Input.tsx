"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
type InputProps = {
  register: UseFormRegister<FieldValues>;
  errors: any;
};

const Input: React.FC<InputProps> = ({ register, errors }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`flex space-x-5 sm:justify-normal justify-center`}>
      <div className="flex flex-col">
        <label
          htmlFor={"day"}
          className={`font-semibold text-lg text-gray-600 ${
            errors.day && "text-[#FF5757]"
          }`}
        >
          DAY
        </label>
        <input
          {...register("day", {
            required: "This field is required",
            pattern: {
              value: /^(0?[1-9]|[12][0-9]|3[01])$/,
              message: "Must be a day",
            },
          })}
          className={`hover:border-indigo-500 border-2 rounded-md w-[90px] sm:w-[120px] py-3 px-4 text-xl font-extrabold mb-2 ${
            errors.day &&
            "border-[#FF5757] hover:border-[#FF5757] focus:border-[#FF5757]"
          }`}
          type="text"
          id="day"
          placeholder="DD"
        />
        {errors.day?.message && (
          <i className="text-[#FF5757] text-sm">{errors.day.message}</i>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="month"
          className={`font-semibold text-lg text-gray-600 ${
            errors.month && "text-[#FF5757]"
          }`}
        >
          MONTH
        </label>
        <input
          {...register("month", {
            required: "This field is required",
            pattern: {
              value: /^(0?[1-9]|1[012])$/,
              message: "Must be a valid month",
            },
          })}
          className={`hover:border-indigo-500 border-2 rounded-md w-[90px] sm:w-[120px] py-3 px-4 text-xl font-extrabold mb-2 ${
            errors.month &&
            "border-[#FF5757] hover:border-[#FF5757] focus:border-[#FF5757]"
          }`}
          type="text"
          id="month"
          placeholder="MM"
        />
        {errors.month?.message && (
          <i className="text-[#FF5757] text-sm">{errors.month.message}</i>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="year"
          className={`font-semibold text-lg text-gray-600 ${
            errors.year && "text-[#FF5757]"
          }`}
        >
          YEAR
        </label>
        <input
          {...register("year", {
            required: "This field is required",
            pattern: {
              value: /^^(19|20)\d{2}$/,
              message: "Must be a valid year",
            },
          })}
          className={`hover:border-indigo-500 border-2 rounded-md w-[90px] sm:w-[120px] py-3 px-4 text-xl font-extrabold mb-2 ${
            errors.year &&
            "border-[#FF5757] hover:border-[#FF5757] focus:border-[#FF5757]"
          }`}
          type="text"
          id="year"
          placeholder="YYYY"
        />
        {errors.year?.message && (
          <i className="text-[#FF5757] text-sm">{errors.year.message}</i>
        )}
      </div>
    </div>
  );
};

export default Input;
