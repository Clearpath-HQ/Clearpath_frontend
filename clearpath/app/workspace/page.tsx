"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Dot } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Workspace() {
  const [showForm, setShowForm] = useState({
    backlog: false,
    inProgress: false,
    done: false,
  });

  const handlePlusClick = (section: "backlog" | "inProgress" | "done") => {
    setShowForm((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div>
      <main className="w-full h-screen bg-[#F8FAFC] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="w-full lg:w-4/5 flex flex-col md:flex-row gap-4 mx-auto">
              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Dot className="h-8 w-8 text-[#00C16A]" />
                    <p>Backlog</p>
                  </div>
                  {!showForm.backlog && (
                    <HoverCard>
                      <HoverCardTrigger>
                        <Plus onClick={() => handlePlusClick("backlog")} />
                      </HoverCardTrigger>
                      <HoverCardContent
                        className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
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
                            Click on the plus icon to create your first task
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </CardContent>
                {showForm.backlog && (
                  <div className="p-4">
                    <div className="bg-white shadow rounded p-4">
                      <h3 className="text-lg font-semibold">Create task</h3>
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Deadline
                          </label>
                          <input
                            type="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("backlog")}
                          >
                            Create task
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("backlog")}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Card>

              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Dot className="h-8 w-8 text-[#0EA5E9]" />
                    <p>In Progress</p>
                  </div>
                  {!showForm.inProgress && (
                    <HoverCard>
                      <HoverCardTrigger>
                        <Plus onClick={() => handlePlusClick("inProgress")} />
                      </HoverCardTrigger>
                      <HoverCardContent
                        className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
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
                            Click on the plus icon to create your first task
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </CardContent>
                {showForm.inProgress && (
                  <div className="p-4">
                    <div className="bg-white shadow rounded p-4">
                      <h3 className="text-lg font-semibold">Create task</h3>
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Deadline
                          </label>
                          <input
                            type="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("inProgress")}
                          >
                            Create task
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("inProgress")}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Card>

              <Card className="w-full dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                <CardContent className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Dot className="h-8 w-8 text-[#A855F7]" />
                    <p>Done</p>
                  </div>
                  {!showForm.done && (
                    <HoverCard>
                      <HoverCardTrigger>
                        <Plus onClick={() => handlePlusClick("done")} />
                      </HoverCardTrigger>
                      <HoverCardContent
                        className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
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
                            Click on the plus icon to create your first task
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </CardContent>
                {showForm.done && (
                  <div className="p-4">
                    <div className="bg-white shadow rounded p-4">
                      <h3 className="text-lg font-semibold">Create task</h3>
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Deadline
                          </label>
                          <input
                            type="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("done")}
                          >
                            Create task
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handlePlusClick("done")}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
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
