"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

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
    return (
        <AppBar position="static" className="bg-black">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} width={100} height={100} alt="Logo" />
                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
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
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
