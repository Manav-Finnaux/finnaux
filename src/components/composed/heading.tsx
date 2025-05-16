import { cn } from "@/lib/utils"
import { CSSProperties } from "react"

type HeadingTypes = React.HTMLProps<HTMLHeadingElement> & {
  as: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  style?: CSSProperties | undefined
  className?: string
}

function getStylesByHeadingLevel(as: HeadingTypes["as"]) {
  if (as === 'h1') {
  }
  if (as === 'h2') {
    return 'text-2xl font-medium min-[560px]:text-3xl md:text-4xl'
    // return 'text-3xl sm:text-4xl font-medium'
  }
  if (as === 'h3') {
    return "text-lg sm:text-xl font-medium"
  }
}

export default function Heading({ as: HeadingLevel = 'h1', children, className }: HeadingTypes) {
  return (
    <>
      <HeadingLevel className={cn(getStylesByHeadingLevel(HeadingLevel), className)}>
        {children}
      </HeadingLevel>
    </>
  )
}