import * as React from "react";
import { cn } from "@/lib/cn";
import Container from "./container";

type Props = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  innerClassName?: string;
};

export default function Section({
  className,
  containerClassName,
  innerClassName,
  children,
  ...props
}: Props) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      <Container className={containerClassName}>
        <div className={innerClassName}>{children}</div>
      </Container>
    </section>
  );
}
