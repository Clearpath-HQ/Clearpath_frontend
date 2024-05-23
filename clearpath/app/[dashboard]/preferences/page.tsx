// @ts-ignore
"use client";
import styled from 'styled-components';
import { CSSProperties, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import './page.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TicketCard from "@/components/component/ticketCard"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from "@/components/ui/card"
import { Heading4 } from 'lucide-react';

export default function Preferences() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex min-h-screen w-full  justify-center bg-white px-4 py-2 dark:bg-gray-250">
      <main className="flex-1 overflow-auto grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <header className="flex h-16 w-full items-center justify-center px-4 md:px-6">
        <div className="mx-auto max-w-[1132px] flex w-full items-center justify-between">
          <div className="flex flex-col items-start">
          <h1 className="py-4 text-[32px] font-semibold leading-none tracking-tight md:pt-11 text-gray-950">
                Preferences
              </h1>
            <p className="text-gray-500 font-medium">mohuburoy@gmail.com</p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link className="hover:underline hover:underline-offset-4" href="#">
              Preferences
            </Link>
          </nav>
          <div className="flex items-center p-4">
        
            <Button size="sm">Sign out</Button>
          </div>
        </div>
      </header>
      <div className="divider"></div>
      <p className="your-account">Your Account</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col mr-4">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={openModal}
                  className="flex flex-col items-start px-7 py-5 bg-white border border-gray-200 rounded-lg shadow-md mb-2.5"
                >
                  <h2 className="text-base font-semibold text-gray-500">
                    My Profile
                  </h2>
                  <p className="text-sm text-gray-500">mohuburoy@gmail.com</p>
                </button>
              </DialogTrigger>
              <DialogContent className="flex flex-col sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you are
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Roy Mohubu"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="@username"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Type New Password
                    </Label>
                    <Input id="password" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="retype password" className="text-right">
                      Retype New Password
                    </Label>
                    <Input id="password" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="flex justify-center items-center px-5 py-2.5 bg-white text-red-500 rounded-lg"
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex justify-between items-center px-7 py-5 bg-white border border-gray-200 rounded-lg shadow-md mb-2.5">
              <h2 className="text-base font-semibold text-gray-500">
                My Notifications
              </h2>
              <Switch />
            </div>
            <button className="flex flex-col items-start px-7 py-5 bg-white border border-gray-200 rounded-lg shadow-md mb-2.5 ">
              <h2 className="text-base font-semibold text-gray-500">
                Danger Zone
              </h2>
              <AlertDialog>
            <AlertDialogTrigger>
              <div className="py-2">
              <h4 className="text-sm text-gray-500">
                Delete account
              </h4>
            </div></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
            </button>
          </div>
          <TicketCard />
        </div>
      </main>
    </div>
  );
}

const parentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

 
};
const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

};
