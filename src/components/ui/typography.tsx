import { cn } from "@/lib/utils"
import type { ReactNode } from "react"


type TypographyProps = {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-5xl font-extrabold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight pb-2",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7  font-medium", className)}>
      {children}
    </p>
  )
}

export function Blockquote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  )
}
