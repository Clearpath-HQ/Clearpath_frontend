"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Dot } from "lucide-react";

export default function Workspace() {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="flex flex-col md:flex-row w-full gap-4 ">
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B]">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#00C16A]" />
                    <p>Backlog</p>
                  </div>
                  <Plus />
                </CardContent>
              </Card>
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B]">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#0EA5E9]" />
                    <p>In progress</p>
                  </div>
                  <Plus />
                </CardContent>
              </Card>
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B]">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center ">
                    <Dot className="h-8 w-8 text-[#A855F7]" />
                    <p>Done</p>
                  </div>
                  <Plus />
                </CardContent>
              </Card>
              <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B]">
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
