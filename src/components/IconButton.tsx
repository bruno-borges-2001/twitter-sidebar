import clsx from 'clsx'
import useSelectedItem, { KeyType } from '../hooks/useSelectedItem';

interface IconButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  index: KeyType;

  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;

  label?: string;

}

export default function IconButton({ index, icon, selectedIcon, label, ...rest }: IconButtonProps) {
  const { selectedItem, setSelectedItem } = useSelectedItem()

  const selected = index === selectedItem;

  return (
    <button onClick={() => setSelectedItem(index)} {...rest} className="flex flex-row items-center p-3 rounded-full hover:bg-[rgba(231,233,231,0.1)]">
      {selected && selectedIcon ? selectedIcon : icon}
      {label && <div className={clsx("ml-5 mr-4", { 'font-bold': selected })}>{label}</div>}
    </button>
  )
}