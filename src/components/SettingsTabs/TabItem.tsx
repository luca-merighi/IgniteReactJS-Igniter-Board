'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export default function TabItem({
  value,
  title,
  isSelected = false,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      tabIndex={0}
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-sky-400 data-[state=active]:text-sky-500 dark:text-zinc-300 dark:data-[state=active]:text-sky-300"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:text-sky-500 group-focus-visible:ring-2 group-focus-visible:ring-sky-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-300"
        />
      )}
    </Tabs.Trigger>
  )
}
