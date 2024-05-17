"use client";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OnboaringWelcome() {
  return (
    <div className="">
      <div className="w-full h-screen  bg-[#E2E8F0] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" flex flex-col items-center justify-center gap-4 w-[346px] m-auto">
            <Image
              src="/Group.svg"
              alt="Blurred Logo"
              height={120}
              width={120}
              className="object-contain filter blur-190"
            />
            <div className="mx-auto items-center text-center">
              <h2 className="text-[#101729] ">
                Welcome, <span className="text-[#57BE73]">Samson</span>
              </h2>
              <p className="text-[#4A5567]">
                A great team begins with efficiency. Create your first workspace
                to get started
              </p>
            </div>
            <Input
              type="email"
              placeholder="Workspace name"
              className=" w-full"
            />
            <Button variant="default" className="w-full">
              Next
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
