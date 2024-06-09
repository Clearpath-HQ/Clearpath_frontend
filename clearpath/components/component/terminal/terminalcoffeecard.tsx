import Image from "next/image";
import React from "react";

export default function TerminalCoffeeCard() {
  return (
    <div className="flex shadow-md w-[576px] h-[250px] rounded-lg ms-auto overflow-hidden relative bg-white dark:bg-transparent dark:border dark:border-[#1E293B]">
      <Image
        src="/coffeebreak.svg"
        alt="coffee-break"
        width={324.84}
        height={273.99}
        className=" absolute top-8"
      />
      <div className="ms-auto pe-7 pt-7 tracking-widest text-[#CBD5E1] text-[18px] text-right capitalize">
        <p>Today</p>
        <p className=" text-[27.39px] mt-10 text-black font-medium dark:text-[#FAFAFA]">
          Take a coffee break, <br />
          you currently have <br /> no tasks
        </p>
      </div>
    </div>
  );
}
