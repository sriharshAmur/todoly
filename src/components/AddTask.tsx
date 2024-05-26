"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTask } from "@/actions/todoActions";
import { Tally1, Tally2, Tally3 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | null>(
    null,
  );

  async function submitTask(formData: FormData) {
    await addTask(formData);
    setTitle("");
    setPriority(null);
  }

  return (
    <form
      action={submitTask}
      className="flex flex-col items-center gap-4 md:flex-row"
    >
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        placeholder="Add task"
      />
      <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-center">
        <div>
          <RadioGroup name="priority" className="flex items-center gap-0">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="low" className="sr-only" />
              <Button
                asChild
                type="button"
                size="icon"
                onClick={() => setPriority("low")}
                variant={priority === "low" ? "secondary" : "outline"}
              >
                <Label className="cursor-pointer" htmlFor="low">
                  <Tally1 size={16} />
                </Label>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" className="sr-only" />
              <Button
                asChild
                type="button"
                size="icon"
                onClick={() => setPriority("medium")}
                variant={priority === "medium" ? "secondary" : "outline"}
              >
                <Label className="cursor-pointer" htmlFor="medium">
                  <Tally2 size={16} />
                </Label>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" className="sr-only" />
              <Button
                asChild
                type="button"
                onClick={() => setPriority("high")}
                size="icon"
                variant={priority === "high" ? "secondary" : "outline"}
              >
                <Label className="cursor-pointer" htmlFor="high">
                  <Tally3 size={16} />
                </Label>
              </Button>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit">Add a Task</Button>
      </div>
    </form>
  );
};

export default AddTask;
