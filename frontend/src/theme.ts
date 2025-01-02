'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-geist)',
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#CD7F32',
            light: '#87521c',
            dark: '#ffb779',
        },
        secondary: {
            main: '#A88B74',
            light: '#735943',
            dark: '#e3c0a5',
        },
        warning: {
          main: '#8D9568',
          light: `#5b6238`,
          dark: `#c3cb97`
        },
        error: {
            main: '#FF5449',
            light: '#ba1a1a',
            dark: '#ffb4ab',
        }
    }
});

export default theme;