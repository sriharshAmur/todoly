import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// type Props = {}

const AddTask = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <Input placeholder="Add task" />
      <Button>Add a Task</Button>
    </div>
  );
};

export default AddTask;
