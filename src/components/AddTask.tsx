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
      <RadioGroup name="priority" className="flex items-center gap-0">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low" id="low" className="sr-only" />
          <Button
            asChild
            type="button"
            size={"sm"}
            onClick={() => setPriority("low")}
            variant={priority === "low" ? "secondary" : "outline"}
          >
            <Label htmlFor="low" className="border">
              <Tally1 size={16} />
            </Label>
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="medium" className="sr-only" />
          <Button
            asChild
            type="button"
            size={"sm"}
            onClick={() => setPriority("medium")}
            variant={priority === "medium" ? "secondary" : "outline"}
          >
            <Label htmlFor="medium">
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
            size={"sm"}
            variant={priority === "high" ? "secondary" : "outline"}
          >
            <Label htmlFor="high">
              <Tally3 size={16} />
            </Label>
          </Button>
        </div>
      </RadioGroup>
      <Button type="submit">Add a Task</Button>
    </form>
  );
};

export default AddTask;
