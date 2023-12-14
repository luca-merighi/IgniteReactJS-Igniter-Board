'use client'

import Image from 'next/image'

import NavItem from './NavItem'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'
import * as Collapsible from '@radix-ui/react-collapsible'

import {
  Search,
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import Button from '../Button'

export default function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=open]:h-screen">
      <div className="flex items-center justify-between">
        <strong className="mx-1 flex items-center gap-2 text-xl font-semibold">
          <Image src="/ignite.svg" alt="" width={32} height={32} />
          <span className="text-emerald-500">
            Igniter{' '}
            <span className="text-zinc-900 dark:text-zinc-100">Board</span>
          </span>
        </strong>

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button type="button" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5 ">
          <NavItem url="/" title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="5 space-y-0">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
