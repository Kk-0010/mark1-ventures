import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout & Spacing
        "flex w-full rounded-md px-4 py-3 text-sm",

        // Background & Border
        "border border-gray-300",

        // Text & Placeholder
        "text-gray-900 placeholder:text-gray-400",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Selection Style
        "selection:bg-blue-500 selection:text-white",

        // Error State via aria
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/30",

        className
      )}
      {...props}
    />
  );
}

export { Input };