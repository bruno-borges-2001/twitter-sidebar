import IconButton from "./components/IconButton"
import { SelectedItemContextProvider } from "./hooks/useSelectedItem"

import { ICON_BUTTONS } from './assets'

import { BsTwitter } from 'react-icons/bs'
import MoreMenu from "./components/MoreMenu"


function App() {
  return (
    <>
      <header className="grow items-end h-full">
        <div className="text-white p-10 flex flex-col gap-2 w-[275px]">
          <SelectedItemContextProvider>
            <div>
              <IconButton icon={<BsTwitter />} />
            </div>
            <div>
              {Object.entries(ICON_BUTTONS).map(([label, value]) => (
                <IconButton key={label} label={label} {...value} shakeOnHover selectable />
              ))}
              <MoreMenu />
            </div>
          </SelectedItemContextProvider>
        </div>
      </header>
    </>
  )
}

export default App
