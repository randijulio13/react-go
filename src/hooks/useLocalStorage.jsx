import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Mengecek apakah key yang diberikan sudah ada di localStorage
  const storedValue = localStorage.getItem(key);
  // Menginisialisasi state dengan nilai dari localStorage jika ada, jika tidak, dengan nilai awal
  const [value, setValue] = useState(storedValue || initialValue);

  // Efek samping untuk menyimpan nilai dalam localStorage saat nilai berubah
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
