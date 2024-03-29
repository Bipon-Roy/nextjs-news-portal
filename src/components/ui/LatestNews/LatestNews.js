import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
    const { data } = await getAllNews();
    console.log(data);
    return (
        <Box className="my-5 mx-4 lg:mx-0">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image
                            src={data[0].thumbnail_url}
                            width={800}
                            height={500}
                            alt="top news"
                        />
                    </CardMedia>
                    <CardContent>
                        <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                            {data[0].category}
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            By {data[0].author.name} - {data[0].author.published_date}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200
                                ? data[0].details.slice(0, 200) + "..."
                                : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid className="mt-5" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.slice(0, 4).map((news) => (
                    <Grid key={news._id} item xs={12} sm={6} md={6}>
                        <Card style={{ height: "100%" }}>
                            <CardActionArea>
                                <CardMedia style={{ height: "100%" }}>
                                    <Image
                                        className="w-full h-60"
                                        src={news.thumbnail_url}
                                        width={400}
                                        height={400}
                                        alt="top news"
                                    />
                                </CardMedia>
                                <CardContent>
                                    <p className=" w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                                        {news.category}
                                    </p>
                                    <Typography gutterBottom>{news.title}</Typography>
                                    <Typography gutterBottom className="my-3">
                                        {news.author.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestNews;
