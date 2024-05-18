"use client"
import styled from 'styled-components';
import { CSSProperties } from 'react';
import React, { useState } from 'react';
import {Switch} from "@/components/ui/switch";
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from "@/components/ui/card"

const Button = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0px;
  justify-content: center;
  align-items: start;
  width: 710px;
  height: 72px;
  background-color: #ffffff;
  color: #64748B;
  border: 1px solid #E2E8F0;
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 0 28px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: auto;
  }
`;

const Button1 = styled(Button)`
  padding: 10px 28px;
  justify-content: center;
`;

const Button2 = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function HomePage() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginRight: '10px'
  };

  const newDivStyle: CSSProperties = {
    width: '320px',
    height: '429px',
    backgroundColor: '#D9D9D9'
  };

  const parentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  };

  const dividerStyle: CSSProperties = {
    width: '1058px',
    height: '30px',
    marginTop: '48px',
    marginLeft: '200px',
    marginBottom: '48px',
    borderTop: '1px solid rgba(100, 116, 139, 0.3)',
    opacity: '30%',
    transform: 'rotate(-0deg)',
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const ButtonDialog = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background-color: white;
  border-radius: 12px;
  padding: 10px 20px;

`;

<Button>Save changes</Button>

  return (
    <div className='h-full bg-white'>
      <div className="outer-container">
        <div className="flexColumnImportant" style={parentStyle}>
          <p style={{
            fontFamily: 'Inter',
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '30px',
            letterSpacing: '0.08em',
            textAlign: 'left',
            color: '#101729'
          }}>Preferences</p>
          <p style={{
            fontFamily: 'SF Pro',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: '20px',
            textAlign: 'left',
            color: '#64748B'
          }}>mohuburoy@gmail.com</p>
        </div>
        <div>
          <p style={{
            fontFamily: 'DM Sans',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18px',
            letterSpacing: '0.08em',
            textAlign: 'left',
            color: '#64748B'
          }}>Sign out</p>
        </div>
      </div>

      <div className="divider"></div>

      <p style={{ color: '#64748B', marginLeft: '200px' }}>Your Account</p>
      <br/>
      
      <div style={parentStyle}>
        <div style={containerStyle}>
          
          
          <Dialog>
      <DialogTrigger asChild>
        
      <Button1 onClick={openModal}>
            <h2 style={{
              fontFamily: 'SF Pro',
              fontSize: '16px',
              fontWeight: 590,
              lineHeight: '20px',
              textAlign: 'left'
            }}>Roy Mohubu</h2>
            <p style={{
              fontSize: '14px',
              fontWeight: 100,
              lineHeight: '20px',
              textAlign: 'left'
            }}>mohuburoy@gmail.com</p>
          </Button1>

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
          <ButtonDialog type="submit">Save changes</ButtonDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>

          <Button2>
            <h2 style={{
              fontFamily: 'SF Pro',
              fontSize: '16px',
              fontWeight: 590,
              lineHeight: '20px',
              textAlign: 'left'
            }}>Notifications</h2>
            <Switch
              checked={isEnabled}
              onChange={() => setIsEnabled(!isEnabled)}
              name="checkedA"
            />
          </Button2>
          <Button>
            <h2 style={{
              fontFamily: 'SF Pro',
              fontSize: '16px',
              fontWeight: 590,
              lineHeight: '20px',
              textAlign: 'left'
            }}>Delete account</h2>
          </Button>
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
