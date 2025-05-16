import { MoveUpRightIcon } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

// interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

interface AnimatedButtonTypes extends ButtonProps {
  icon?: boolean
  // variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  children: React.ReactNode
}

// type AnimatedButtonTypes = {
// }

export default function AnimatedButton({ icon, variant, children }: AnimatedButtonTypes) {
  return (
    <Button variant={variant}>
      {
        icon ? (
          <>
            {children}
            <AnimatedIcon />
          </>
        ) :
          (
            children
          )
      }
    </Button>
  );
}

function AnimatedIcon() {
  return (
    <div className="*:transition-[opacity_translate-y] duration-75 ease-in-out w-full">
      <div className="flex justify-between items-center group-hover/animation:opacity-0 group-hover/animation:h-0 group-hover/animation:pointer-events-none group-hover/animation:select-none group-hover/animation:-translate-y-4">
        <MoveUpRightIcon />
      </div>
      <div className="flex justify-between items-center group-hover/animation:opacity-100 group-hover/animation:h-fit group-hover/animation:pointer-events-auto group-hover/animation:select-auto group-hover/animation:translate-y-0 opacity-0 h-0 pointer-events-none select-none translate-y-4">
        <MoveUpRightIcon />
      </div>
    </div>
  );
}