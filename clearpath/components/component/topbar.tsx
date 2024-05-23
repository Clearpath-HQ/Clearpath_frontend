import React from "react";
import { Button } from "../ui/button";
import { BellIcon, RefreshCwIcon } from "lucide-react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
        <p className=" font-medium text-3xl tracking-widest text-black dark:text-white">Hello, Roy</p>
        <p className=" text-[#64748B] text-xl">{formattedDate}</p>
      </div>
      <div className="flex self-center ms-auto gap-2">
        <SwitchWorkSpace/>
        <Button size="sm" variant="outline" className="shadow font-normal bg-[#ffffffe6] dark:bg-transparent">
          <BellIcon className="w-4" strokeWidth="2px"/>
        </Button>
      </div>
    </div>
  );
}


export function SwitchWorkSpace() {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState<string>("Switch")
  const workspaces = ["Intelli", "Teplay", "Agriguard"]
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleWorkSpaceSwitch = (workspaces:string)=> {
    setSelectedWorkspace(workspaces)
    setIsOpen(false)
  }
  return (
    <div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline" className="shadow font-normal bg-[#ffffffe6] dark:bg-transparent" onClick={() => setIsOpen(!isOpen)}>
              <RefreshCwIcon className="mr-2 w-4" strokeWidth="2px" />
              {selectedWorkspace}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="dark:bg-[#020420] border-[#1E293B] w-fit">
            <div>
              <ul>
                {workspaces.map((workspace, index) => (
                  <div key={index}>
                    <Button className="w-full my-1 dark:text-white dark:hover:bg-[#00C16A]" variant="outline" onClick={() => handleWorkSpaceSwitch(workspace)}>{workspace}</Button>
                  </div>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
    </div>
  )
}

