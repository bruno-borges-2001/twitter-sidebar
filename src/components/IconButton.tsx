import clsx from 'clsx'
import useSelectedItem from '../hooks/useSelectedItem';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;

  label?: string;

  selectable?: boolean;

  shakeOnHover?: boolean;
}

export default function IconButton({ icon, selectedIcon, label, onClick, shakeOnHover, selectable = true, ...rest }: IconButtonProps) {
  const { selectedItem, setSelectedItem } = useSelectedItem()

  const selected = label === selectedItem;

  function handleSelectItem() {
    setSelectedItem(label ?? "Home")
  }

  return (
    <button onClick={selectable ? handleSelectItem : onClick} {...rest} className={
      clsx("flex flex-row items-center p-3 rounded-full hover:bg-[rgba(231,233,231,0.1)]",
        {
          'shakeable': shakeOnHover
        }
      )}>
      {selected && selectedIcon ? selectedIcon : icon}
      {label && <div className={clsx("ml-5 mr-4", { 'font-bold': selected })}>{label}</div>}
    </button>
  )
}