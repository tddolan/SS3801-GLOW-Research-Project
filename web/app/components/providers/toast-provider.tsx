"use client";

import { useTheme } from "@mui/material";
import { Toaster } from "sonner";

type ToastProviderProps = {
  children: React.ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const theme = useTheme();

  return (
    <>
      <Toaster
        theme={theme.palette.mode === "dark" ? "dark" : "light"}
        position="top-right"
        richColors
      />
      {children}
    </>
  );
};
