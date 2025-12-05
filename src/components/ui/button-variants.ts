// components/ui/button-variants.ts
import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  `
  inline-flex items-center justify-center gap-2 whitespace-nowrap
  rounded-[50px] text-sm font-medium transition-all 
  disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none
  relative overflow-hidden 
  [&_svg]:pointer-events-none 
  [&_svg:not([class*='size-'])]:size-4 
  [&_svg]:shrink-0
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  `,
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90
        `,
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-9 px-4 py-5",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },

      withArrow: {
        true: `
          pr-4 hover:pr-6
          [&>svg.arrow]:opacity-0 [&>svg.arrow]:-translate-x-1
          hover:[&>svg.arrow]:opacity-100 hover:[&>svg.arrow]:translate-x-0
          transition-all
        `,
        false: `
          pr-4
          [&>svg.arrow]:hidden
        `,
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      withArrow: true,  // default is arrow enabled
    },
  }
)
