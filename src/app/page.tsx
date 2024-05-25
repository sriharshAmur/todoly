import AddTask from "@/components/AddTask";
import Task from "@/components/Task";
import { ModeToggle } from "@/components/mode-toggle";
import { db } from "@/server/db";
import { tasks as taskSchema } from "@/server/db/schema";

export default async function HomePage() {
  const tasks = await db.select().from(taskSchema);
  return (
    <div className="container h-screen px-2 py-8 md:px-8">
      <div className="relative flex h-full flex-col items-center gap-8">
        <div className="absolute bottom-0 right-0">
          <ModeToggle />
        </div>
        <div className="flex items-center gap-4">
          <h1>TODOLY</h1>
        </div>
        <div className="flex w-full flex-col  gap-8 md:w-1/2 md:min-w-96">
          <AddTask />

          <div className="flex w-full flex-col gap-4">
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
