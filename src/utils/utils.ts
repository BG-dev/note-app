import INote from "../types/note";

const STORAGE_KEY = "notes";

export function writeDataToStorage(data: INote[]): void {
  const jsonData: string = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
}

export function readDataFromStorage(): INote[] | null {
  const jsonData: string | null = localStorage.getItem(STORAGE_KEY);
  let data: INote[] | null = null;
  if (jsonData != null) {
    data = JSON.parse(jsonData);
  }
  return data;
}
