"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);

  // 1) After first render in the browser: read from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) setValue(JSON.parse(stored));
    } catch (err) {
      console.error("Could not read localStorage", err);
    }
    setLoaded(true);
  }, [key]);

  // 2) Whenever value changes (after loading): write back
  useEffect(() => {
    if (!loaded) return; // don't overwrite saved data with the empty default
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Could not write localStorage", err);
    }
  }, [key, value, loaded]);

  return [value, setValue, loaded];
}