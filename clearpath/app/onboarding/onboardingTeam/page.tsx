"use client";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function OnboaringTeam() {
  return (
    <div className="">
      <div className="w-full bg-[#E2E8F0] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" flex flex-col items-center justify-center gap-4 w-[346px] m-auto">
            <Avatar>
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="mx-auto items-center text-center">
              <h1 className="text-[#101729] font-medium text-[28px]">
                Invite team to, <span className="text-[#57BE73]">TePlay</span>
              </h1>
              <p className="text-[#4A5567]">
                A great team begins with efficiency. Invite your team members to
                TePlay
              </p>
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="email" placeholder="Email" />

            <Input type="email" placeholder="Email" />
            <div className="text-[#4A5567] ml-auto">
              <span>Add more</span>
              <hr className="border-t border-[#4A5567]" />
            </div>
            <Button variant="default">Next</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
