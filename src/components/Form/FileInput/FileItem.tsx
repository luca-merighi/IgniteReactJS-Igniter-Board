import Button from '@/components/Button'
import formatBytes from '@/utils/format-bytes'

import { tv, VariantProps } from 'tailwind-variants'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-sky-100 bg-sky-200 p-2 text-sky-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      complete: {
        container: 'border-sky-500 dark:border-sky-300/30',
      },
      error: {
        container:
          'bg-red-50 border-red-300 dark:bg-red-500/10 dark:border-red-500/30',
        icon: 'border-red-50 bg-red-100 text-red-500 dark:bg-red-500/50 dark:border-red-500/30 dark:text-red-400',
        deleteButton:
          'text-red-500 hover:text-red-700 hover:bg-red-100 dark:text-red-400 dark:hover:text-red-300',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-600 dark:text-red-400">
              Upload failed, please try again
            </span>
            <span className="text-sm text-red-500 dark:text-red-400">
              {name}
            </span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-300 dark:hover:text-red-200"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 w-4/5 rounded-full bg-sky-600 dark:bg-sky-500"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-sky-500 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}