import React from 'react'
import useKonamiCode from '../hooks/useKonamiCode'

export default function Hotkeys() {
  useKonamiCode(window.document);
  return null;
}
