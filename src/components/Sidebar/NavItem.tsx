import { ElementType } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface NavItemProps {
  url?: string
  title: string
  icon: ElementType
}

export default function NavItem({
  url = '#',
  title,
  icon: Icon,
}: NavItemProps) {
  return (
    <Link
      href={url}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-sky-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-sky-500 dark:text-zinc-100 dark:group-hover:text-sky-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-sky-300 dark:text-zinc-600" />
    </Link>
  )
}
