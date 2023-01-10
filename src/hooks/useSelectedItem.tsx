import { createContext, useContext, useState } from "react";

export type KeyType = string | number

interface SelectedItemContextProps {
  selectedItem: KeyType;
  setSelectedItem: React.Dispatch<React.SetStateAction<KeyType>>
}

interface SelectedItemContextProviderProps {
  children: React.ReactNode
}

const SelectedItemContext = createContext({} as SelectedItemContextProps)

export function SelectedItemContextProvider({ children }: SelectedItemContextProviderProps) {
  const [selectedItem, setSelectedItem] = useState<KeyType>(0)

  return <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>{children}</SelectedItemContext.Provider>
}

export default function useSelectedItem() {
  const selectedItemContext = useContext(SelectedItemContext)

  return selectedItemContext;
}