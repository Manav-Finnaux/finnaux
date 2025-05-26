import clsx from "clsx"

type SectionProps = React.HTMLProps<HTMLDivElement> & {
  variant?: 'top' | 'normal'
  children: React.ReactNode
  className?: string
}

export default function Section({ variant = 'normal', className, children, ...delegated }: SectionProps) {
  return (
    <section className={clsx(variant === 'top' && 'pt-36', 'pb-36', className)} {...delegated}>
      {/* <section className={clsx('bg-red-700', variant === 'top' && 'pt-36', className)} {...delegated}> */}
      {children}
    </section>
  )
}