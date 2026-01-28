import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material/styles';

export function getTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: '#0ea5e9' },
      secondary: { main: '#6366f1' },
    },
    shape: {
      borderRadius: 12,
    },
  });
}
