import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[4rem] rounded-md border px-4 py-3 text-sm",
        "bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700",
        "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/30",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
