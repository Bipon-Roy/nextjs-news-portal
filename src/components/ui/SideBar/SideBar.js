import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideNews from "@/assets/side-top-news.png";
const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={sideNews} width={800} alt="Top News" />
                </CardMedia>

                <CardContent>
                    <p className="max-w-fit bg-red-600 text-white px-1 rounded my-2">Technology</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Box>
    );
};

export default SideBar;
