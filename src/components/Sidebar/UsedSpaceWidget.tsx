export default function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-sky-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-sky-700 dark:text-sky-500">
          Used Space
        </span>
        <p className="text-sm/5 text-sky-500 dark:text-sky-300">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-sky-100">
        <div className="dark:bg-sky-5300 h-2 w-4/5 rounded-full bg-sky-500"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-sky-500 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-400"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-400"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  )
}
