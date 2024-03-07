import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
const LatestNews = () => {
    return (
        <Box>
            <Card className="my-5">
                <CardMedia>
                    <Image src={topNews} width={800} alt="Top News" />
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
            </Card>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card className="my-5">
                        <CardMedia>
                            <Image src={topNews2} width={800} alt="Top News" />
                        </CardMedia>

                        <CardContent>
                            <p className="max-w-fit bg-red-600 text-white px-1 rounded my-2">
                                Technology
                            </p>
                            <Typography gutterBottom>Lizard</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;
