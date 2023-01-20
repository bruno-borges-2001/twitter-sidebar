import { useRef, useState } from "react"
import IconButton from './IconButton'

import { CiCircleMore } from 'react-icons/ci'
import { CREATOR_STUDIO_ICONS, MENU_ICON_BUTTONS, SETTINGS_AND_SUPPORT_ICONS, TWITTER_FOR_PROFESSIONALS_ICONS } from "../assets";
import Drawer from "./Drawer";

export default function MoreMenu() {
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [{ top, left }, setButtonCoords] = useState({ top: 0, left: 0 });

  function handleMenuOpen() {
    const buttonRect = iconButtonRef.current?.getBoundingClientRect()

    if (!buttonRect) return;

    setIsMenuOpened(true)
    setButtonCoords({ top: buttonRect.bottom - 261, left: buttonRect.left })
  }

  function handleMenuClose() {
    setIsMenuOpened(false)
  }

  return (
    <>
      <IconButton
        icon={<CiCircleMore />}
        label="More"
        onClick={handleMenuOpen}
        ref={iconButtonRef}
      />
      {isMenuOpened &&
        <div
          className="h-[100vh] w-[100vw] fixed inset-0"
          onClick={handleMenuClose}
        >
          <div
            className={`flex flex-col items-center shadow-menu absolute bg-black rounded-lg min-w-[318px] overflow-hidden`}
            style={{ top, left, maxHeight: window.innerHeight - top }}
            onClick={(e) => e.stopPropagation()}
            ref={menuRef}
          >
            <div className="flex flex-col items-center w-full overflow-auto">
              {Object.entries(MENU_ICON_BUTTONS).map(([label, value]) => (
                <IconButton key={label} label={label} {...value} onClick={handleMenuClose} menuButton />
              ))}
              <div className="w-[90%] h-[1px] bg-gray-500" />
              <Drawer label="Creator Studio" buttons={CREATOR_STUDIO_ICONS} closeDialog={handleMenuClose} />
              <Drawer label="Professional Tools" buttons={TWITTER_FOR_PROFESSIONALS_ICONS} closeDialog={handleMenuClose} />
              <Drawer label="Settings and Support" buttons={SETTINGS_AND_SUPPORT_ICONS} closeDialog={handleMenuClose} />
            </div>
          </div>
        </div>
      }
    </>
  )
}