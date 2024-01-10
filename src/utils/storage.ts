import { APP_DATA_STORAGE_KEY } from "@/constants/storage"

export function getLocalStorageAppState() {
  try {
    const item = window.localStorage.getItem(APP_DATA_STORAGE_KEY)
    const parsedItem = item ? JSON.parse(item) : {}
    return parsedItem
  } catch (e) {
    return {}
  }
}

export function updateLocalStorageAppState(updates: Record<string, any>) {
  try {
    const state = getLocalStorageAppState()
    localStorage.setItem(
      APP_DATA_STORAGE_KEY,
      JSON.stringify({ ...state, ...updates })
    )
    return getLocalStorageAppState()
  } catch (e) {
    return {}
  }
}
