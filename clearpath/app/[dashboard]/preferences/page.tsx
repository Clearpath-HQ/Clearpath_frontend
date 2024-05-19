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

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from "@/components/ui/card"

export default function HomePage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='h-full bg-white'>
      <div className="outer-container">
        <div className="flexColumnImportant" style={parentStyle}>
          <p className="pref-title">Preferences</p>
          <p className="email">mohuburoy@gmail.com</p>
        </div>
        <div>
          <p className="sign-out">Sign out</p>
        </div>
      </div>

      <div className="divider"></div>

      <p className="your-account">Your Account</p>
      <br/>
      
      <div style={parentStyle}>
        <div style={containerStyle}>
          <Dialog>
            <DialogTrigger asChild>
            <button className="button1" onClick={openModal}>
              <h2 className="button1Text">Roy Mohubu</h2>
              <p className="button1Subtext">mohuburoy@gmail.com</p>
            </button>
            </DialogTrigger>
            <DialogContent className="flex flex-col sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you are done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Type New Password
                  </Label>
                  <Input
                    id="username"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Retype New Password
                  </Label>
                  <Input
                    id="username"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <button className="buttonDialog" type="submit">Save changes</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <button className="button2">
            <h2>Notifications</h2>
            <Switch />
          </button>
          <AlertDialog>
            <AlertDialogTrigger>
              <button className="button">
                <h2>Delete account</h2>
              </button></AlertDialogTrigger>
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

        </div>
        <div className=''>
          <Card className='w-full h-full border-radius-sm items-center gap-4 p-4'>
            <CardTitle>header</CardTitle>
            <CardContent>same</CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
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
