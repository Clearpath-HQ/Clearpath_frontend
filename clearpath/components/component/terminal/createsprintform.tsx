"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  sprintduration: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => data.from <= data.to, {
      message: "End date must be after start date",
      path: ["to"],
    }),
  done: z.string().min(2, {
    message: "Success definition must be at least 2 characters.",
  }),
  capacity: z.number().min(0, {
    message: "Capacity must be at least 0.",
  }),
});

interface CreateSprintFormProps {
  onClose: () => void;
}

export function CreateSprintForm({ onClose }: CreateSprintFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      sprintduration: {
        from: undefined,
        to: undefined,
      },
      done: "",
      capacity: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Title:", values.title);
    console.log("Description:", values.description);
    console.log("Sprint Duration:", values.sprintduration);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155]">Title</FormLabel>
              <FormDescription className="text-[#64748B]">
                A short, descriptive name for the sprint.
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light"
                  placeholder="Market size week"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155]">Description</FormLabel>
              <FormDescription className="text-[#64748B]">
                {"Briefly describe the sprint's objectives and scope"}.
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light"
                  placeholder="Do TAM, SAM, TM"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="sprintduration"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155]">Sprint Duration</FormLabel>
              <FormControl>
                <DatePickerWithRange
                  value={field.value}
                  onChange={(dateRange) => field.onChange(dateRange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Image
          src="/successmetric.svg"
          alt="success metric badge"
          width={500}
          height={13}
        />
        <FormField
          control={form.control}
          name="done"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155]">
                Definition of Done
              </FormLabel>
              <FormDescription className="text-[#64748B]">
                {"What you define as success"}
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light"
                  placeholder="Work done"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="capacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155]">
                Capacity / Velocity
              </FormLabel>
              <FormDescription className="text-[#64748B]">
                {"Estimate hours/task"}
              </FormDescription>
              <FormControl>
                <CapacityCounter
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="xs"
            onClick={onClose}
            className="w-[50%]"
          >
            Cancel
          </Button>
          <Button type="submit" variant="success" size="xs" className="w-[50%]">
            Create Sprint
          </Button>
        </div>
      </form>
    </Form>
  );
}

export function DatePickerWithRange({
  value,
  onChange,
  className,
}: {
  value: DateRange | undefined;
  onChange: (value: DateRange | undefined) => void;
} & React.HTMLAttributes<HTMLDivElement>) {
  const today = new Date();
  const fiveDays = addDays(today, 6);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-light text-[#64748B]",
              !value && "text-muted-foreground"
            )}
          >
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, y")} -{" "}
                  {format(value.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              <span>
                {format(today, "LLL dd, y")} - {format(fiveDays, "LLL dd, y")}
              </span>
            )}
            <CalendarIcon className="ms-auto text-[#94A3B8] h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function CapacityCounter({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(value > 0 ? value - 1 : 0);

  return (
    <div className="flex bg-[#F8FAFC] rounded-lg p-2">
      <Input
        type="number"
        value={value}
        readOnly
        className="w-[70%] text-center bg-transparent border-none"
      />
      <div className="ms-auto">
        <Button
          variant="outline"
          type="button"
          className=" rounded-r-none rounded-ee-none"
          onClick={handleDecrement}
        >
          -
        </Button>
        <Button
          variant="outline"
          type="button"
          className=" rounded-tl-none rounded-bl-none"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}
