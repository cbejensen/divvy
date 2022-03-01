import { useEffect, useState } from "react";

export default function useSettings() {
  const [settings, saveSettings] = useState(getSettingsFromLocalStorage());
  useEffect(() => {
    saveSettingsToLocalStorage(settings);
  }, [settings]);
  return [settings, saveSettings];
}

export function getSettingsFromLocalStorage() {
  return {
    language: 'en',
    numberType: 'no',
    ...JSON.parse(window.localStorage.getItem('settings') || '{}')
  };
}

export function saveSettingsToLocalStorage(settings) {
  if (!settings) {
    return;
  }
  window.localStorage.setItem('settings', JSON.stringify(settings));
}