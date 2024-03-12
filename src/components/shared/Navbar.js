"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Header from "./Header";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/categories/news?category=all-news",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
        route: "Contact",
        pathname: "/contact",
    },
];

const Navbar = () => {
    const [state, setState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} to={item.pathname}>
                            <ListItemText primary={item.route} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <Header />
            <AppBar position="static" className="bg-black ">
                <Container className="relative">
                    <Toolbar disableGutters>
                        <Image src={logo} width={100} height={100} alt="Logo" />
                        <Box className="hidden lg:block w-full text-center">
                            {navItems.map((item, idx) => (
                                <Link key={idx} href={item.pathname}>
                                    <Button className="text-white">{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        <Box className="hidden lg:block">
                            <Stack
                                sx={{
                                    "& svg": {
                                        color: "white",
                                    },
                                }}
                                direction="row"
                            >
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                        <Box>
                            <IconButton
                                className="absolute bottom-2 right-2 lg:hidden "
                                onClick={toggleDrawer("right", true)}
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                            >
                                {list("right")}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default Navbar;
