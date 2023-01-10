import IconButton from "./components/IconButton"
import { SelectedItemContextProvider } from "./hooks/useSelectedItem"

import { ICON_BUTTONS } from './assets'

function App() {
  return (
    <div className="text-white p-10">
      <SelectedItemContextProvider>
        {Object.entries(ICON_BUTTONS).map(([label, value], index) => <IconButton key={label} label={label} {...value} />)}
      </SelectedItemContextProvider>
    </div>
  )
}

export default App
