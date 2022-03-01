import { useCallback, useEffect, useState } from 'react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA'
];

export default function useKonamiCode(element) {
  const [keys, setKeys] = useState([]);
  const handleKonami = useCallback(
    ({ code: key }) => {
      console.log(key)
      const expectedKey = konamiCode[keys.length];
      if (expectedKey && key === expectedKey) {
        setKeys(keys => {
          const newKeys = [...keys, key];
          console.log(newKeys)
          return newKeys;
        });
      } else {
        setKeys([]);
      }
    },
    [[...keys]],
  )
  
  useEffect(() => {
    if (element) {
      element.addEventListener('keydown', handleKonami);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKonami);
      }
    };
  }, [element, handleKonami]);

  useEffect(() => {
    if (keys.length === konamiCode.length) {
      document.body.classList.add('konami')
    }
  }, [keys])
}
