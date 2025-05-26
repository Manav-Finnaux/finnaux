import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const badgeVariants = cva(
  "flex gap-2 items-center border-2 w-fit px-2 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "bg-slate-50 border-slate-200 text-secondary-foreground font-sm hover:bg-slate-100 mx-auto px-4",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground bg-slate-100 border-slate-200 py-2",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  // if (!variant) {
  //   return (
  //     <div className="flex">
  //       <div className="relative w-full h-4">
  //         <Image src={'/left-badge.svg'} alt="" fill className="left-0" />
  //       </div>
  //       <div className={cn(badgeVariants({ variant }), className)} {...props} />
  //       <div className="relative w-full h-4">
  //         <Image src={'/right-badge.svg'} alt="" fill className="right-0" />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

