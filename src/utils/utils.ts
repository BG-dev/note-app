export function writeDataToStorage<Data>(data: Data[], key: string): void {
  const jsonData: string = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
}

export function readDataFromStorage<Data>(key: string): Data[] {
  const jsonData: string | null = localStorage.getItem(key);
  let data: Data[] = [];
  if (jsonData != null) {
    data = JSON.parse(jsonData);
  }
  return data;
}
