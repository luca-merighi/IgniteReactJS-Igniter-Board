'use client'

import { ReactNode } from 'react'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

interface SelectDropdownProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}

export default function SelectDropdown({
  children,
  placeholder,
  ...props
}: SelectDropdownProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-sky-500 dark:focus-within:ring-sky-500/10 dark:data-[placeholder]:text-zinc-400">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Select.Viewport className="outline-none">{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
