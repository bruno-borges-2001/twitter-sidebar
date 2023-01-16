import IconButton from "./components/IconButton"
import { SelectedItemContextProvider } from "./hooks/useSelectedItem"

import { ICON_BUTTONS } from './assets'

import { BsTwitter } from 'react-icons/bs'


function App() {
  return (
    <div className="text-white p-10 flex flex-col gap-2">
      <SelectedItemContextProvider>
        <div>
          <IconButton icon={<BsTwitter />} />
        </div>
        <div>
          {Object.entries(ICON_BUTTONS).map(([label, value]) => <IconButton key={label} label={label} {...value} shakeOnHover />)}
        </div>
      </SelectedItemContextProvider>
    </div>
  )
}

export default App
