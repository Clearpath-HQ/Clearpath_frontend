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
import { Calendar as CalendarIcon, ChevronRightIcon, X } from "lucide-react";
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
  goals: z.string().optional(),
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
      goals: "",
    },
  });

  const formValues = form.watch();

  const isFormValid = () => {
    try {
      formSchema.parse(formValues);
      return true;
    } catch {
      return false;
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Title:", values.title);
    console.log("Description:", values.description);
    console.log("Sprint Duration:", values.sprintduration);
    console.log("Defintion of Done", values.done);
    console.log("Capacity/Velocity", values.capacity);
    console.log("Goals:", values.goals);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#334155] dark:text-white">Title</FormLabel>
              <FormDescription className="text-[#64748B]">
                A short, descriptive name for the sprint.
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light focus-visible:border-[#00C16A] focus-visible:ring-[#00C16A]"
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
              <FormLabel className="text-[#334155] dark:text-white">Description</FormLabel>
              <FormDescription className="text-[#64748B]">
                {"Briefly describe the sprint's objectives and scope"}.
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light focus-visible:border-[#00C16A] focus-visible:ring-[#00C16A]"
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
              <FormLabel className="text-[#334155] dark:text-white">Sprint Duration</FormLabel>
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
              <FormLabel className="text-[#334155] dark:text-white">
                Definition of Done
              </FormLabel>
              <FormDescription className="text-[#64748B]">
                {"What you define as success"}
              </FormDescription>
              <FormControl>
                <Input
                  className=" placeholder:text-[#64748B] placeholder:font-light focus-visible:border-[#00C16A] focus-visible:ring-[#00C16A]"
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
              <FormLabel className="text-[#334155] dark:text-white">
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
        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <GoalsField
                  value={field.value || ""}
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
          <Button type="submit" variant="success" size="xs" className="w-[50%]" disabled={!isFormValid()}>
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
              "w-full justify-start text-left font-light text-[#64748B] dark:text-white dark:border dark:bg-gray-900 dark:border-[#1E293B]",
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
            <CalendarIcon className="ms-auto text-[#94A3B8] h-4 w-4 dark:text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 dark:bg-gray-900 dark:text-white" align="end">
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
    <div className="flex bg-[#F8FAFC] dark:bg-gray-900 dark:border-[#1E293B] rounded-lg p-2">
      <Input
        type="number"
        value={value}
        readOnly
        className="w-[70%] text-center bg-transparent border-none focus-visible:ring-[#F8FAFC]"
      />
      <div className="ms-auto">
        <Button
          variant="outline"
          type="button"
          className=" rounded-r-none rounded-ee-none dark:border-[#F8FAFC]"
          onClick={handleDecrement}
        >
          -
        </Button>
        <Button
          variant="outline"
          type="button"
          className=" rounded-tl-none rounded-bl-none dark:border-[#F8FAFC]"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export function GoalsField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(value);
  const [buttonEnabled, setButtonEnabled] = React.useState(false);
  const [goalsSet, setGoalsSet] = React.useState(false);

  React.useEffect(() => {
    setButtonEnabled(text.trim().length > 0);
  }, [text]);

  const handlePopoverOpen = () => {
    setOpen(true);
    setText(value);
  };

  const handlePopoverClose = () => {
    setOpen(false);
    setEditing(false);
    if (text.trim().length === 0) {
      setGoalsSet(false);
      setText(value);
    }
  };

  const handleEditClick = () => setEditing(true);

  const handleSetGoals = () => {
    if (text.trim().length === 0) {
      setGoalsSet(false);
    } else {
      onChange(text);
      setGoalsSet(true);
    }
    handlePopoverClose();
  };

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={`flex items-center justify-between p-4 rounded-lg dark:bg-gray-900 cursor-pointer dark:border dark:border-[#1E293B] dark:hover:bg-gray-800 ${
              goalsSet ? "bg-[#EFFDF5]" : "bg-[#F8FAFC]"
            }`}
            onClick={handlePopoverOpen}
          >
            <span className="text-[#64748B] font-light text-sm dark:text-white">
              {goalsSet ? <div className="text-[#00C16A] font-normal">{"Your goals are set"}</div> : "Goals"}
            </span>
            <ChevronRightIcon className={`h-6 w-6 ${goalsSet ? "text-[#00C16A]" : "text-[#64748B] dark:text-white"}`} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="p-4 dark:bg-[#020420] dark:text-white dark:border-[#1E293B]"
          align="end"
          alignOffset={-200}
          sideOffset={-52}
        >
          <div className="flex after:content[''] after:absolute after:w-full after:h-[1px] after:bg-[#CBD5E1] after:top-12 after:left-0 mb-6">
            <p>Sprint goals</p>
            <Button
              className="ms-auto w-4 h-4"
              onClick={handlePopoverClose}
              variant="link"
              size="xs"
              type="button"
            >
              <X />
            </Button>
          </div>
          {editing ? (
            <>
              <textarea
                className="w-full h-80 p-2 focus-visible:outline-none placeholder:text-sm dark:bg-[#020420]"
                value={text}
                placeholder="Click to type..."
                onChange={(e) => setText(e.target.value)}
              />
            </>
          ) : (
            <div
              className="flex items-center h-80 justify-center p-2 cursor-text"
              onClick={handleEditClick}
            >
              <span className="text-gray-500 text-sm font-light flex flex-col items-center">
                <Image
                  src="/setgoals.svg"
                  alt="goals icon"
                  width={166.67}
                  height={125}
                  className="mr-2"
                />
                {goalsSet? value : "Click here to start typing"}
              </span>
            </div>
          )}
          <div className="flex gap-2">
            <Button
              type="button"
              className="w-[50%]"
              variant="outline"
              size="xs"
              onClick={handlePopoverClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-[50%]"
              variant="success"
              size="xs"
              onClick={handleSetGoals}
              disabled={!buttonEnabled}
            >
              Set goals
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
