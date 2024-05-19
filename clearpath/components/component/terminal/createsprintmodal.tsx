import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { CreateSprintForm } from "./createsprintform";

export default function CreateSprintModal() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(false);
      };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="success" size="xs">
          Create sprint
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Sprint</DialogTitle>
          <div className="flex justify-center items-center">
            <div className=" absolute w-[47%] left-0 h-[1px] bg-[#CBD5E1]"></div>
            <Image src="/logo.png" alt="clearpath logo" width={20} height={20}/>
            <div className="absolute w-[47%] right-0 h-[1px] bg-[#CBD5E1]"></div>
          </div>
        </DialogHeader>
        <CreateSprintForm onClose={handleClose}/>
      </DialogContent>
    </Dialog>
  );
}
