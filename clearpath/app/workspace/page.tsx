"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Dot } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Workspace() {
  return (
    <div>
      <main className="flex-1 w-full h-screen  bg-[#F8FAFC] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="flex flex-col md:flex-row w-full gap-4 ">
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#00C16A]" />
                    <p>Backlog</p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger>
                      {" "}
                      <Plus />
                    </HoverCardTrigger>
                    <HoverCardContent
                      className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative 
                      shadow-md shadow-gray-400 z-50 after:content[''] after:absolute after:bg-[#E2E8F0] after:h-4 after:w-4 after:-top-2 after:left-[48%] after:rotate-45"
                      sideOffset={24}
                    >
                      <Image
                        alt="Team"
                        className="mx-auto w-full rounded-md"
                        height={20}
                        src="/teams.svg"
                        width={20}
                      />
                      <div className="mx-auto items-center text-center">
                        <p className="text-[#4A5567] mt-6">
                          Click on tile to create your first task
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none ">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#0EA5E9]" />
                    <p>In progress</p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger>
                      {" "}
                      <Plus />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#A855F7]" />
                    <p>Done</p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger>
                      {" "}
                      <Plus />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
              <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-center items-center">
                  <Plus />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
