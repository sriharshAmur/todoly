import AddTask from "@/components/AddTask";
import SortAndFilter from "@/components/SortAndFilter";
import Task from "@/components/Task";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { db } from "@/server/db";
import { tasks as taskSchema } from "@/server/db/schema";

export default async function HomePage({
  searchParams,
}: {
  searchParams: URLSearchParams & {
    prioritySort: "asc" | "desc" | null;
  };
}) {
  let tasks = await db.select().from(taskSchema);

  if (searchParams.prioritySort) {
    tasks = [
      ...tasks.filter((task) => task.priority === "high"),
      ...tasks.filter((task) => task.priority === "medium"),
      ...tasks.filter((task) => task.priority === "low"),
      ...tasks.filter((task) => !task.priority),
    ];
    if (searchParams.prioritySort === "asc") {
      tasks = tasks.reverse();
    }
  }
  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container h-screen px-2 py-8 md:px-8">
      <div className="relative flex h-full flex-col items-center gap-8">
        <div className="absolute bottom-0 right-0">
          <ModeToggle />
        </div>
        <div className="flex items-center gap-4">
          <h1>TODOLY</h1>
        </div>
        <div className="flex w-full flex-col  gap-8 md:w-2/3 md:min-w-96 lg:w-1/2">
          <AddTask />

          <SortAndFilter />

          <div className="flex w-full flex-col gap-4">
            {incompleteTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>

          {completedTasks.length > 0 && <Separator />}

          <div className="flex w-full flex-col gap-4">
            {completedTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
