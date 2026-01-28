import * as React from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { useSetAtom } from 'jotai';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useRouter } from 'next/router';

import {
  cartCountAtom,
  clearCartAtom,
  incrementCartAtom,
  selectedParkAtom,
  themeModeAtom,
} from '@/state/atoms';

const parks = ['SeaWorld Orlando', 'Busch Gardens Tampa', 'SeaWorld San Diego'];

export default function SiteHeader() {
  const router = useRouter();
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const [cartCount] = useAtom(cartCountAtom);
  const [selectedPark, setSelectedPark] = useAtom(selectedParkAtom);
  const incrementCart = useSetAtom(incrementCartAtom);
  const clearCart = useSetAtom(clearCartAtom);

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  const onParkChange = (e: SelectChangeEvent<string>) => {
    setSelectedPark(e.target.value);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      className="border-b border-gray-300 bg-white/95 text-gray-900 backdrop-blur dark:border-gray-700 dark:bg-gray-950/90 dark:text-gray-100"
    >
      <Toolbar className="mx-auto w-full max-w-5xl gap-3 px-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="no-underline">
            <Typography variant="h6" component="span" className="truncate font-semibold text-gray-900 dark:text-gray-100">
              Headless Sitecore Sandbox
            </Typography>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            href="/about"
            className={`rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-900/60 dark:hover:text-gray-100 ${
              router.asPath === '/about' ? 'bg-gray-100 text-gray-900 dark:bg-gray-900/60 dark:text-gray-100' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/tickets"
            className={`rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-900/60 dark:hover:text-gray-100 ${
              router.asPath === '/tickets' ? 'bg-gray-100 text-gray-900 dark:bg-gray-900/60 dark:text-gray-100' : ''
            }`}
          >
            Tickets
          </Link>
        </nav>

        <div className="flex-1" />

        <div className="hidden items-center gap-2 sm:flex">
          <Typography variant="body2" className="text-gray-800 dark:text-gray-200">
            Park
          </Typography>
          <Select
            size="small"
            value={selectedPark}
            onChange={onParkChange}
            className="min-w-55"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(148,163,184,0.6)' },
            }}
          >
            {parks.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </div>

        <IconButton onClick={toggleTheme} aria-label="Toggle theme" className="text-gray-900 dark:text-gray-100">
          {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        <IconButton
          onClick={() => incrementCart(1)}
          aria-label="Add one to cart (demo)"
          className="text-gray-900 dark:text-gray-100"
        >
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <button
          type="button"
          onClick={() => clearCart()}
          className="hidden rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 sm:inline"
        >
          Clear
        </button>
      </Toolbar>
    </AppBar>
  );
}
