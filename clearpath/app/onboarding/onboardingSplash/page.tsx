"use client";

import Image from "next/image";

export default function OnboaringSplash() {
  return (
    <div className="">
      <div className="w-full h-screen bg-[#E2E8F0] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" flex flex-col items-center justify-center gap-4 w-[534px] m-auto">
            <div className=" text-center">
              <h2 className="text-[#101729] font-medium text-[28px]">
                Congratulations, get started now
              </h2>
              <p className="text-[#4A5567]">
                You just invited your team mates to Teplay; let’s start off with
                Sprints.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
