import clsx from "clsx";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: "top" | "normal";
};

export default function Section({
  variant = "normal",
  className,
  children,
  ...delegated
}: SectionProps) {
  return (
    <section
      className={clsx(
        "w-full", // Ensure full width
        variant === "top"
          ? "pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32" // Responsive padding for top sections
          : "py-10 sm:py-12 md:py-16", // Responsive padding for normal sections
        className
      )}
      {...delegated}>
      {children}
    </section>
  );
}
