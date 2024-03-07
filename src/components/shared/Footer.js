import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const Footer = () => {
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
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box
                    className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: "white",
                        },
                    }}
                >
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item, idx) => (
                        <Link key={idx} href={item.pathname}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography textAlign="center" variant="body2" color="gray">
                    @2024 The Dragon News
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
