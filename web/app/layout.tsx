import { Box, Card, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import ThemeRegistry from "./components/providers/theme-registry";
import LayoutWrapper from "./components/layout-wrapper";

export const metadata: Metadata = {
  title: "GLOW Research Project",
  description: "This is the website component of our SS3801 final project on great lakes offshore wind power.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <CssBaseline enableColorScheme />
        <ThemeRegistry>
          <Box sx={{ backgroundColor: "background.default" }} height={"100%"}>
            <Box
              component={"div"}
              sx={{
                height: "100%",
                margin: 0,
                overflow: "hidden",
              }}
            >
              <LayoutWrapper>
                <Box
                  height={"100%"}
                  sx={{
                    boxSizing: "border-box",
                    padding: { xs: ".5rem", sm: "1rem" },
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      overflowY: "auto",
                    }}
                  >
                    {props.children}
                  </Card>
                </Box>
              </LayoutWrapper>
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
