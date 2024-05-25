"use client";

import React from "react";
import { Button } from "./ui/button";
import { Pencil, Trash, CircleCheckBig } from "lucide-react";
import { deleteTask, toggleComplete } from "@/actions/todoActions";
import { cn } from "@/lib/utils";

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

const ICON_SIZE = 18;

const Task = ({ task }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded border px-4 py-2 ",
        {
          "bg-green-400 dark:bg-green-800": task.completed,
        },
      )}
    >
      <div>
        <div>{task.title}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"secondary"}>
          <Pencil size={ICON_SIZE} />
        </Button>
        <Button variant={"destructive"} onClick={() => deleteTask(task.id)}>
          <Trash size={ICON_SIZE} />
        </Button>
        <Button
          onClick={() => toggleComplete(task.id)}
          className={cn("", {
            "bg-green-900 text-white hover:bg-green-600": task.completed,
          })}
        >
          <CircleCheckBig size={ICON_SIZE} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
