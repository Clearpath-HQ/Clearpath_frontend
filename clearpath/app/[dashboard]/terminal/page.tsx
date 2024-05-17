"use client";
import { Button } from "@/components/ui/button";
import { BellIcon, RefreshCwIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function Terminal() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <main className="min-h-screen w-[1058px] mx-auto relative">
      <div className="flex mt-14 after:content[''] after:absolute after:w-full after:h-[1px] after:bg-[#64748b30] after:top-[96px]">
        <div>
          <p className=" font-medium text-3xl">Hello, Roy</p>
          <p className=" text-[#64748B] text-xl">{formattedDate}</p>
        </div>
        <div className="flex self-center ms-auto gap-2">
          <Button size="sm" variant="outline" className="shadow font-normal">
            <RefreshCwIcon className="mr-2 w-4" strokeWidth="2px"/>
            Switch
          </Button>
          <Button size="sm" variant="outline" className="shadow font-normal">
            <BellIcon className="w-4" strokeWidth="2px"/>
          </Button>
        </div>
      </div>
    </main>
  );
}
