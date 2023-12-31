import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 active:opacity-80',
  variants: {
    variant: {
      primary:
        'bg-sky-500 text-white hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-500',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-400',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export default function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
