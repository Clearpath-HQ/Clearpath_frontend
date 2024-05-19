import Image from "next/image"
import { Upload } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TicketCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Your Trophies</CardTitle>
        <CardDescription>
          You are an early adopter and therefore all the badges you earn shall be displayed here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}
