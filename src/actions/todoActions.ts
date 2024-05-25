"use server";

import { db } from "@/server/db";
import { tasks } from "@/server/db/schema";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const taskData = {
    title: formData.get("title") as string,
  };
  await db.insert(tasks).values(taskData);
  revalidatePath("/");
}

export async function deleteTask(id: number) {
  await db.delete(tasks).where(eq(tasks.id, id));
  revalidatePath("/");
}

export async function toggleComplete(id: number) {
  await db
    .update(tasks)
    .set({
      completed: not(tasks.completed),
    })
    .where(eq(tasks.id, id));
  revalidatePath("/");
}
