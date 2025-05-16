import { cn } from "@/lib/utils"

export default function MaxWidthWrapper({ className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-7xl w-11/12", className)} {...props} />
}