import clsx from "clsx";
import { ReactElement, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import IconButton from "./IconButton";

interface DrawerProps {
  label: string;
  buttons: { [label: string]: { icon: ReactElement } }

  closeDialog(): void;
}

export default function Drawer({ label, buttons, closeDialog }: DrawerProps) {
  const [isDrawerCollapsed, setIsDrawerCollapsed] = useState(true)

  function handleToggleDrawer() {
    setIsDrawerCollapsed(prev => !prev)
  }

  return (
    <div className="w-full">
      <div className="flex justify-between p-4 hover:bg-[rgba(231,233,231,0.1)]" onClick={handleToggleDrawer}>
        <span className="text-sm">{label}</span>
        <div className="grid place-items-center">
          <HiChevronUp className={clsx(
            "transition-transform h-5 w-5",
            {
              'rotate-180': isDrawerCollapsed,
              'text-[rgb(29,155,240)]': !isDrawerCollapsed
            }
          )} />
        </div>
      </div>
      <div>
        {!isDrawerCollapsed && Object.entries(buttons).map(([label, value]) => (
          <IconButton
            key={label}
            label={label}
            {...value}
            onClick={closeDialog}
            menuButton
            small />
        ))}
      </div>
    </div>
  )
}