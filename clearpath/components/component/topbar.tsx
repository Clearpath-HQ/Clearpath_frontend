import React from "react";
import { Button } from "../ui/button";
import { RefreshCwIcon } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="flex after:content[''] after:absolute after:w-full after:h-[1px] after:bg-[#64748b30] after:top-40">
      <div>
        <p className=" font-medium text-3xl tracking-widest">Hello, Roy</p>
        <p className=" text-[#64748B] text-xl">{formattedDate}</p>
      </div>
      <div className="flex self-center ms-auto gap-2">
        <Button size="sm" variant="outline" className="shadow font-normal bg-white">
          <RefreshCwIcon className="mr-2 w-4" strokeWidth="2px" />
          Switch
        </Button>
        <Button size="sm" variant="outline" className="shadow font-normal bg-white">
          <Image
            src="/bell.svg"
            alt="notification-icon"
            width={20}
            height={20}
          />
        </Button>
      </div>
    </div>
  );
}
