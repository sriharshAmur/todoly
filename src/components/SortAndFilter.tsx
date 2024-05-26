"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowDownUp, ArrowDown01, ArrowUp01 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortAndFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prioritySort = searchParams.get("prioritySort");

  const handlePrioritySort = () => {
    const params = new URLSearchParams(searchParams);
    const prioritySort = params.get("prioritySort");
    switch (prioritySort) {
      case "asc":
        params.set("prioritySort", "desc");
        break;
      case "desc":
        params.delete("prioritySort");
        break;
      default:
        params.set("prioritySort", "asc");
        break;
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div>
        <Button size="sm" variant="secondary" onClick={handlePrioritySort}>
          <div className="flex items-center gap-2">
            <div className="rounded border p-1">
              {prioritySort ? (
                prioritySort === "asc" ? (
                  <ArrowDown01 size={15} />
                ) : (
                  <ArrowUp01 size={15} />
                )
              ) : (
                <ArrowDownUp size={15} />
              )}
            </div>
            <div>Priority</div>
          </div>
        </Button>
        {/* <Button>Created</Button> */}
      </div>
      <div></div>
    </div>
  );
};

export default SortAndFilter;
