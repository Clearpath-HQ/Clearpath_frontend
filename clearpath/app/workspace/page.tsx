// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Plus, Dot } from "lucide-react";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

// export default function Workspace() {
//   const [showForm, setShowForm] = useState({
//     backlog: false,
//     inProgress: false,
//     done: false,
//   });

//   const handlePlusClick = (section: "backlog" | "inProgress" | "done") => {
//     setShowForm((prev) => ({ ...prev, [section]: !prev[section] }));
//   };
//   return (
//     <div>
//       <main className="w-full h-screen bg-[#F8FAFC] bg-opacity-95 backdrop-blur-sm">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container mx-auto px-4 md:px-6 lg:px-0">
//             <div className="w-full lg:w-11/12 flex flex-col md:flex-row gap-4 mx-auto">
//               <div className="w-full">
//                 <Card className=" dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                   <CardContent className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Dot className="h-8 w-8 text-[#00C16A]" />
//                       <p>Backlog</p>
//                     </div>
//                     {!showForm.backlog && (
//                       <HoverCard>
//                         <HoverCardTrigger>
//                           <Plus onClick={() => handlePlusClick("backlog")} />
//                         </HoverCardTrigger>
//                         <HoverCardContent
//                           className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
//                           sideOffset={24}
//                         >
//                           <Image
//                             alt="Team"
//                             className="mx-auto w-full rounded-md"
//                             height={20}
//                             src="/teams.svg"
//                             width={20}
//                           />
//                           <div className="mx-auto items-center text-center">
//                             <p className="text-[#4A5567] mt-6">
//                               Click on the plus icon to create your first task
//                             </p>
//                           </div>
//                         </HoverCardContent>
//                       </HoverCard>
//                     )}
//                   </CardContent>
//                   {showForm.backlog && (
//                     <div className="p-4">
//                       <div className="bg-white shadow rounded p-4">
//                         <h3 className="text-lg font-semibold">Create task</h3>
//                         <form>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Title
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Description
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Deadline
//                             </label>
//                             <input
//                               type="date"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <button
//                               type="button"
//                               className="bg-[#F8FAFC] hover:bg-[#aeafb1] text-[#334155] border border-[#CBD5E1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("backlog")}
//                             >
//                               Cancel
//                             </button>
//                             <button
//                               type="button"
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("backlog")}
//                             >
//                               Create task
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   )}
//                 </Card>
//               </div>

//               <div className="w-full">
//                 <Card className=" dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                   <CardContent className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Dot className="h-8 w-8 text-[#0EA5E9]" />
//                       <p>In Progress</p>
//                     </div>
//                     {!showForm.inProgress && (
//                       <HoverCard>
//                         <HoverCardTrigger>
//                           <Plus onClick={() => handlePlusClick("inProgress")} />
//                         </HoverCardTrigger>
//                         <HoverCardContent
//                           className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
//                           sideOffset={24}
//                         >
//                           <Image
//                             alt="Team"
//                             className="mx-auto w-full rounded-md"
//                             height={20}
//                             src="/teams.svg"
//                             width={20}
//                           />
//                           <div className="mx-auto items-center text-center">
//                             <p className="text-[#4A5567] mt-6">
//                               Click on the plus icon to create your first task
//                             </p>
//                           </div>
//                         </HoverCardContent>
//                       </HoverCard>
//                     )}
//                   </CardContent>
//                   {showForm.inProgress && (
//                     <div className="p-4">
//                       <div className="bg-white shadow rounded p-4">
//                         <h3 className="text-lg font-semibold">Create task</h3>
//                         <form>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Title
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Description
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Deadline
//                             </label>
//                             <input
//                               type="date"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <button
//                               type="button"
//                               className="bg-[#F8FAFC] hover:bg-[#aeafb1] text-[#334155] border border-[#CBD5E1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("inProgress")}
//                             >
//                               Cancel
//                             </button>
//                             <button
//                               type="button"
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("inProgress")}
//                             >
//                               Create task
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   )}
//                 </Card>
//               </div>

//               <div className="w-full">
//                 <Card className=" dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                   <CardContent className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Dot className="h-8 w-8 text-[#A855F7]" />
//                       <p>Done</p>
//                     </div>
//                     {!showForm.done && (
//                       <HoverCard>
//                         <HoverCardTrigger>
//                           <Plus onClick={() => handlePlusClick("done")} />
//                         </HoverCardTrigger>
//                         <HoverCardContent
//                           className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
//                           sideOffset={24}
//                         >
//                           <Image
//                             alt="Team"
//                             className="mx-auto w-full rounded-md"
//                             height={20}
//                             src="/teams.svg"
//                             width={20}
//                           />
//                           <div className="mx-auto items-center text-center">
//                             <p className="text-[#4A5567] mt-6">
//                               Click on the plus icon to create your first task
//                             </p>
//                           </div>
//                         </HoverCardContent>
//                       </HoverCard>
//                     )}
//                   </CardContent>
//                   {showForm.done && (
//                     <div className="p-4">
//                       <div className="bg-white shadow rounded p-4">
//                         <h3 className="text-lg font-semibold">Create task</h3>
//                         <form>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Title
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Description
//                             </label>
//                             <input
//                               type="text"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                               Deadline
//                             </label>
//                             <input
//                               type="date"
//                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <button
//                               type="button"
//                               className="bg-[#F8FAFC] hover:bg-[#aeafb1] text-[#334155] border border-[#CBD5E1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("done")}
//                             >
//                               Cancel
//                             </button>
//                             <button
//                               type="button"
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               onClick={() => handlePlusClick("done")}
//                             >
//                               Create task
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   )}
//                 </Card>
//               </div>
//               <div className="w-full">
//                 <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                   <CardContent className="flex justify-center items-center">
//                     <Plus />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Plus, Dot } from "lucide-react";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

// const colorOptions = [
//   "#00C16A",
//   "#0EA5E9",
//   "#A855F7",
//   "#FF0000",
//   "#FF00FF",
//   "#FFA500",
//   "#0000FF",
// ];

// type Section = "backlog" | "inProgress" | "done";

// interface ShowFormState {
//   backlog: boolean;
//   inProgress: boolean;
//   done: boolean;
// }

// interface ShowPaletteState {
//   backlog: boolean;
//   inProgress: boolean;
//   done: boolean;
// }

// interface ColorsState {
//   backlog: string;
//   inProgress: string;
//   done: string;
// }

// export default function Workspace() {
//   const [showForm, setShowForm] = useState<ShowFormState>({
//     backlog: false,
//     inProgress: false,
//     done: false,
//   });

//   const [showPalette, setShowPalette] = useState<ShowPaletteState>({
//     backlog: false,
//     inProgress: false,
//     done: false,
//   });

//   const [colors, setColors] = useState<ColorsState>({
//     backlog: "#00C16A",
//     inProgress: "#0EA5E9",
//     done: "#A855F7",
//   });

//   const handlePlusClick = (section: Section) => {
//     setShowForm((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const handleColorChange = (section: Section, color: string) => {
//     setColors((prev) => ({ ...prev, [section]: color }));
//     setShowPalette((prev) => ({ ...prev, [section]: false }));
//   };

//   const togglePalette = (section: Section) => {
//     setShowPalette((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <div>
//       <main className="w-full h-screen bg-[#F8FAFC] bg-opacity-95 backdrop-blur-sm">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container mx-auto px-4 md:px-6 lg:px-0">
//             <div className="w-full lg:w-11/12 flex flex-col md:flex-row gap-4 mx-auto">
//               {["backlog", "inProgress", "done"].map((section) => (
//                 <div key={section} className="w-full">
//                   <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                     <CardContent className="flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="relative">
//                           <Dot
//                             className="h-8 w-8 cursor-pointer"
//                             style={{ color: colors[section as Section] }}
//                             onClick={() => togglePalette(section as Section)}
//                           />
//                           {showPalette[section as Section] && (
//                             <div className="absolute mt-2 p-2 bg-white border rounded shadow-lg">
//                               {colorOptions.map((color) => (
//                                 <div
//                                   key={color}
//                                   className="h-6 w-6 rounded-full cursor-pointer"
//                                   style={{ backgroundColor: color }}
//                                   onClick={() =>
//                                     handleColorChange(section as Section, color)
//                                   }
//                                 ></div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                         <p className="capitalize ml-2">
//                           {section.replace(/([A-Z])/g, " $1")}
//                         </p>
//                       </div>
//                       {!showForm[section as Section] && (
//                         <HoverCard>
//                           <HoverCardTrigger>
//                             <Plus
//                               onClick={() =>
//                                 handlePlusClick(section as Section)
//                               }
//                             />
//                           </HoverCardTrigger>
//                           <HoverCardContent
//                             className="dark:border-gray-800 dark:bg-[#FFFFFF] dark:text-[#01133B] w-48 border-none relative shadow-md shadow-gray-400 z-50"
//                             sideOffset={24}
//                           >
//                             <Image
//                               alt="Team"
//                               className="mx-auto w-full rounded-md"
//                               height={20}
//                               src="/teams.svg"
//                               width={20}
//                             />
//                             <div className="mx-auto items-center text-center">
//                               <p className="text-[#4A5567] mt-6">
//                                 Click on the plus icon to create your first task
//                               </p>
//                             </div>
//                           </HoverCardContent>
//                         </HoverCard>
//                       )}
//                     </CardContent>
//                     {showForm[section as Section] && (
//                       <div className="p-4">
//                         <div className="bg-white shadow rounded p-4">
//                           <h3 className="text-lg font-semibold">Create task</h3>
//                           <form>
//                             <div className="mb-4">
//                               <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Title
//                               </label>
//                               <input
//                                 type="text"
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Description
//                               </label>
//                               <input
//                                 type="text"
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Deadline
//                               </label>
//                               <input
//                                 type="date"
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                               />
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <button
//                                 type="button"
//                                 className="bg-[#F8FAFC] hover:bg-[#aeafb1] text-[#334155] border border-[#CBD5E1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={() =>
//                                   handlePlusClick(section as Section)
//                                 }
//                               >
//                                 Cancel
//                               </button>
//                               <button
//                                 type="button"
//                                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 onClick={() =>
//                                   handlePlusClick(section as Section)
//                                 }
//                               >
//                                 Create task
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     )}
//                   </Card>
//                 </div>
//               ))}
//               <div className="w-full">
//                 <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
//                   <CardContent className="flex justify-center items-center">
//                     <Plus />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Dot } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const colorOptions = [
  "#00C16A",
  "#0EA5E9",
  "#A855F7",
  "#FF0000",
  "#FF00FF",
  "#FFA500",
  "#0000FF",
];

type Section = "backlog" | "inProgress" | "done";

interface ShowFormState {
  backlog: boolean;
  inProgress: boolean;
  done: boolean;
}

interface ShowPaletteState {
  backlog: boolean;
  inProgress: boolean;
  done: boolean;
}

interface ColorsState {
  backlog: string;
  inProgress: string;
  done: string;
}

export default function Workspace() {
  const [showForm, setShowForm] = useState<ShowFormState>({
    backlog: false,
    inProgress: false,
    done: false,
  });

  const [showPalette, setShowPalette] = useState<ShowPaletteState>({
    backlog: false,
    inProgress: false,
    done: false,
  });

  const [colors, setColors] = useState<ColorsState>({
    backlog: "#00C16A",
    inProgress: "#0EA5E9",
    done: "#A855F7",
  });

  const handlePlusClick = (section: Section) => {
    setShowForm((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleColorChange = (section: Section, color: string) => {
    setColors((prev) => ({ ...prev, [section]: color }));
    setShowPalette((prev) => ({ ...prev, [section]: false }));
  };

  const togglePalette = (section: Section) => {
    setShowPalette((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div>
      <main className="w-full h-screen bg-[#F8FAFC] bg-opacity-95 backdrop-blur-sm">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="w-full lg:w-11/12 flex flex-col md:flex-row gap-4 mx-auto">
              {["backlog", "inProgress", "done"].map((section) => (
                <div key={section} className="w-full">
                  <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                    <CardContent className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="relative">
                          <Dot
                            className="h-8 w-8 cursor-pointer"
                            style={{ color: colors[section as Section] }}
                            onClick={() => togglePalette(section as Section)}
                          />
                          {showPalette[section as Section] && (
                            <div className="absolute mt-2 p-2 bg-white border rounded shadow-lg flex space-x-2">
                              {colorOptions.map((color) => (
                                <div
                                  key={color}
                                  className="h-6 w-6 rounded-full cursor-pointer"
                                  style={{ backgroundColor: color }}
                                  onClick={() =>
                                    handleColorChange(section as Section, color)
                                  }
                                ></div>
                              ))}
                            </div>
                          )}
                        </div>
                        <p className="capitalize ml-2">
                          {section.replace(/([A-Z])/g, " $1")}
                        </p>
                      </div>
                      {!showForm[section as Section] && (
                        <HoverCard>
                          <HoverCardTrigger>
                            <Plus
                              onClick={() =>
                                handlePlusClick(section as Section)
                              }
                            />
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
                    {showForm[section as Section] && (
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
                                className="bg-[#F8FAFC] hover:bg-[#aeafb1] text-[#334155] border border-[#CBD5E1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() =>
                                  handlePlusClick(section as Section)
                                }
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() =>
                                  handlePlusClick(section as Section)
                                }
                              >
                                Create task
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
              <div className="w-full">
                <Card className="dark:bg-[#F1F5F9] dark:text-[#64748B] border-none">
                  <CardContent className="flex justify-center items-center">
                    <Plus />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
