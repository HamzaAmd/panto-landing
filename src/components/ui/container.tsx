import * as React from "react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...props }: Props) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
