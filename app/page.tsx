"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Input from "./components/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

export default function Home() {
  const [year, setYear] = useState("--");
  const [month, setMonth] = useState("--");
  const [day, setDay] = useState("--");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      year: "",
      month: "",
      day: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const currentYear = new Date().getFullYear();
    const newYear = currentYear - data.year;
    const newMonth = 12 - data.month;
    const newDay = 2 + Number(data.day);

    setYear(newYear.toString());
    setMonth(newMonth.toString());
    setDay(newDay.toString());
  };

  return (
    <div className="px-6 mx-auto">
      <div className="bg-white my-44 p-11 rounded-2xl rounded-br-[140px] shadow-md flex flex-col sm:justify-start justify-center w-[500px] sm:w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} errors={errors} />
          <div className="relative flex my-12 items-center">
            <hr className="border-1 border-gray-300 w-[400px] sm:w-[480px]" />
            <button
              type="submit"
              className="absolute right-[150px] sm:right-0 bg-[#864cfd] p-4 rounded-full hover:bg-black text-white"
            >
              <Image
                src={"/images/icon-arrow.svg"}
                alt="Icon"
                width={45}
                height={45}
              />
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:mx-0 mx-auto font-[1000] text-[62px]">
          <i>
            <span className="text-[#864cfd]">{year}&nbsp;</span>years
          </i>
          <i>
            <span className="text-[#864cfd]">{month}&nbsp;</span>months
          </i>
          <i>
            <span className="text-[#864cfd]">{day}&nbsp;</span>days
          </i>
        </div>
      </div>
      <Footer />
    </div>
  );
}
