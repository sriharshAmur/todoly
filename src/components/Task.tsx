import { type Task as TaskType } from "@/app/page";
import React from "react";
import { Button } from "./ui/button";
import { Pencil, Trash, CircleCheckBig } from "lucide-react";

type Props = {
  task: TaskType;
};

const ICON_SIZE = 18;

const Task = ({ task }: Props) => {
  return (
    <div className="flex items-center justify-between rounded border px-4 py-2 ">
      <div>
        <div>{task.title}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"secondary"}>
          <Pencil size={ICON_SIZE} />
        </Button>
        <Button variant={"destructive"}>
          <Trash size={ICON_SIZE} />
        </Button>
        <Button>
          <CircleCheckBig size={ICON_SIZE} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
