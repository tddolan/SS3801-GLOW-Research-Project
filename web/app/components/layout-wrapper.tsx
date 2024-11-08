"use client";
import Box from "@mui/material/Box";
import { ReactNode} from "react";
import { Stack } from "@mui/material";
import TopBar from "./top-bar";

export default function LayoutWrapper(props: { children: ReactNode }) {
    return (
        <Stack
            direction="column"
            sx={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <TopBar />
            <Stack
                direction="row"
                flex={1}
                sx={{ flexGrow: 1, overflow: "hidden" }}
            >
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                    }}
                >
                    {props.children}
                </Box>
            </Stack>
        </Stack>
    );
}
