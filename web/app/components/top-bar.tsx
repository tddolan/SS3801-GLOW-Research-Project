import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  Theme,
  Stack,
  Card,
  Link,
  Button,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import SourceIcon from "@mui/icons-material/Source";
import CommentIcon from '@mui/icons-material/Comment';
import { usePathname } from "next/navigation";

export default function TopBar() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const pathName = usePathname();

  const links: { name: string; icon?: JSX.Element; href?: string }[] = [
    {
      name: "Home",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Info",
      icon: <FeedIcon />,
      href: "/info",
    },
    {
      name: "Discussion",
      icon: <CommentIcon/>,
      href: "/discussion",
    },
    {
      name: "Database",
      icon: <SourceIcon />,
      href: "/database",
    },
  ];

  return (
    <Box>
      <AppBar position="static" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "5rem",
             justifyItems: "center"
          }}
        >
          <Box justifyItems={"center"} flex={1}>
          <Card sx={{padding: "0.5rem", overflow: "auto"}}>
            <Stack direction={"row"} flex={1} spacing={10}>
              {links.map((item, index) => (
                <Link href={item.href} key={index}>
                  <Button
                    sx={{
                      justifyContent: "center",
                      width: item.name.length > 10 ? "15rem" : "10rem",
                    }}
                    fullWidth
                    startIcon={item.icon}
                    variant={pathName === item.href ? "contained" : "text"}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Card></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}