"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTask } from "@/actions/todoActions";

const AddTask = () => {
  const [title, setTitle] = useState("");

  async function submitTask(formData: FormData) {
    await addTask(formData);
    setTitle("");
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
      <Button type="submit">Add a Task</Button>
    </form>
  );
};

export default AddTask;
