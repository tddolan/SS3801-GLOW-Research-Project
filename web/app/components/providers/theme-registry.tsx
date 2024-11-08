"use client";

import {ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode, useContext } from "react";
import { theme } from "./theme"

export default function ThemeRegistry(props: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider>
                <ThemeRegistryContents>{props.children}</ThemeRegistryContents>
        </AppRouterCacheProvider>
    );
}

function ThemeRegistryContents(props: { children: ReactNode }) {

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}