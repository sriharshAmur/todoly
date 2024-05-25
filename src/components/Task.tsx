"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  Pencil,
  Trash,
  CircleCheckBig,
  Tally1,
  Tally2,
  Tally3,
} from "lucide-react";
import { deleteTask, toggleComplete } from "@/actions/todoActions";
import { cn } from "@/lib/utils";

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
    priority: "low" | "medium" | "high" | null;
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
      <div className="flex items-center gap-2">
        {task.priority && (
          <div className="rounded bg-secondary p-2">
            {task.priority === "low" ? (
              <Tally1 size={ICON_SIZE} />
            ) : task.priority === "medium" ? (
              <Tally2 size={ICON_SIZE} />
            ) : (
              <Tally3 size={ICON_SIZE} />
            )}
          </div>
        )}
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
