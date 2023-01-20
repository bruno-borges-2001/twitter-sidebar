import clsx from 'clsx'
import useSelectedItem from '../hooks/useSelectedItem';
import React, { cloneElement, forwardRef } from 'react';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  selectedIcon?: React.ReactElement;

  label?: string;

  selectable?: boolean;

  shakeOnHover?: boolean;

  menuButton?: boolean;
  small?: boolean;
}

export default forwardRef(
  function IconButton(
    { icon, selectedIcon, label, onClick, shakeOnHover, menuButton, small, selectable, ...rest }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>) {
    const { selectedItem, setSelectedItem } = useSelectedItem()

    const selected = label === selectedItem;

    function handleSelectItem() {
      setSelectedItem(label ?? "Home")
    }

    const parsedIcon = selected && selectedIcon ? selectedIcon : icon

    return (
      <button
        ref={ref}
        onClick={selectable ? handleSelectItem : onClick} {...rest}
        className={
          clsx("flex flex-row items-center p-3 hover:bg-[rgba(231,233,231,0.1)]",
            {
              'shakeable': shakeOnHover,
              'w-full': menuButton,
              'rounded-full': !menuButton
            }
          )
        }>
        {small ? cloneElement(parsedIcon, { style: { height: '1rem', width: '1rem' } }) : parsedIcon}
        {label && <div
          className={clsx(
            "ml-5 mr-4",
            {
              'font-bold': selected || (menuButton && !small),
              'text-xs': small,
              'max-md:hidden': !menuButton
            })
          }
        >
          {label}
        </div>}
      </button>
    )
  }
)