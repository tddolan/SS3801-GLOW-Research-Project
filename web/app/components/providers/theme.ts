"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#43A047",
        },
        background: {
            default: "#f7f8f9",
            paper: "#ffffff",
        },
    },
});