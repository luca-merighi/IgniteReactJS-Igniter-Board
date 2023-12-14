import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Button from '../Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* <Image
        src="https://github.com/luca-merighi.png"
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      /> */}
      <img
        src="https://github.com/luca-merighi.png"
        alt="Foto de Perfil"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-500 dark:text-zinc-100">
          Luca Merighi
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          lucafmerighi@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
