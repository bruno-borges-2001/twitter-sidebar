import { createContext, useContext, useState } from "react";

interface SelectedItemContextProps {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>
}

interface SelectedItemContextProviderProps {
  children: React.ReactNode
}

const SelectedItemContext = createContext({} as SelectedItemContextProps)

export function SelectedItemContextProvider({ children }: SelectedItemContextProviderProps) {
  const [selectedItem, setSelectedItem] = useState("")

  return <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>{children}</SelectedItemContext.Provider>
}

export default function useSelectedItem() {
  const selectedItemContext = useContext(SelectedItemContext)

  return selectedItemContext;
}