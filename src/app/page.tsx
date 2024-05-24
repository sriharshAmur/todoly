import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div>TODO</div>
      <ModeToggle />
      <Button>Add a Task</Button>
    </div>
  );
}
