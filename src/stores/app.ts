import { create } from "zustand"
import {
  getLocalStorageAppState,
  updateLocalStorageAppState,
} from "@/utils/storage"

interface AppStore {
  appState: any
  updateAppState: (updatedState: Object) => void
}

const useAppStore = create<AppStore>((set, get) => ({
  appState: getLocalStorageAppState(),
  updateAppState: (
    updatedState,
    options = {
      updateLocalStorage: true,
    }
  ) => {
    const { updateLocalStorage } = options
    if (updateLocalStorage) {
      updateLocalStorageAppState(updatedState)
    }
    set((state) => ({
      appState: {
        ...state.appState,
        ...updatedState,
      },
    }))
  },
}))

export default useAppStore
