import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import CreateSprintModal from "./createsprintmodal";

export default function CreateSprintCard() {
  return (
    <div className=" flex shadow-lg h-[300px] rounded-xl overflow-hidden bg-white">
      <div className="capitalize w-[658px] flex flex-col justify-center items-center">
        <div className="w-[395px] mx-auto text-center">
          <p className="text-4xl font-medium">
            Efficiency begins with short sprints.
          </p>
          <p className="text-[#64748B] text-sm mb-7 mt-2">
            Get started by creating your first sprint
          </p>
          <CreateSprintModal/>
        </div>
      </div>
      <Image
        src="/friendlyreminder.svg"
        alt="svg-icon of friendly reminder"
        width={400}
        height={300}
      />
    </div>
  );
}
