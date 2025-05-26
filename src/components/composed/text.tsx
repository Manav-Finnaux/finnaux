import { cn } from "@/lib/utils";

type TextTypes = React.HTMLProps<HTMLParagraphElement> & React.HTMLProps<HTMLSpanElement> & {
  as?: 'p' | 'span'
  variant?: 'default' | 'xl' | 'lg'
}

function getStylesByVariant(variant: TextTypes['variant']) {
  let variantStyles;

  if (variant === 'default') {
    variantStyles = ''
  }
  else if (variant === 'lg') {
    variantStyles = 'text-md min-[560px]:text-lg md:text-xl'
  }
  else if (variant === 'xl') {
    variantStyles = 'text-xl sm:text-2xl'
  }

  return variantStyles;
}

export default function Text({ as: TextEle = 'span', className, variant = 'default', children }: TextTypes) {


  return (
    <TextEle className={cn(getStylesByVariant(variant), className)} >
      {children}
    </TextEle>
  )
  {/* {children} */ }
  {/* </TextEle> */ }
}