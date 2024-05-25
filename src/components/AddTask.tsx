import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/server/db";
import { tasks } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

const AddTask = () => {
  async function addTask(formData: FormData) {
    "use server";

    const taskData = {
      title: formData.get("title") as string,
    };

    // mutate data
    await db.insert(tasks).values(taskData);

    // revalidate cache
    revalidatePath("/");
  }
  return (
    <form
      action={addTask}
      className="flex flex-col items-center gap-4 md:flex-row"
    >
      <Input type="text" name="title" placeholder="Add task" />
      <Button type="submit">Add a Task</Button>
    </form>
  );
};

export default AddTask;
