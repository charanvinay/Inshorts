import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import moment from "moment";
import NoImage from "../assets/no-image.jpg";

const ArticleCard = (props) => {
  let {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  } = props.article;
  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  // const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  // const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  // const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  // const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px

  return (
    <Card
      id={props.id}
      sx={{
        width: "100%",
        marginBottom: "30px",
        padding: "10px",
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        [bpSMd]: { flexDirection: "column" },
        boxShadow:
          "0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* card image */}
      <Box
        sx={{
          // padding: "10px",
          width: "325px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          [bpSMd]: { width: "inherit" },
        }}
      >
        <Box
          component={"img"}
          src={urlToImage || NoImage}
          alt="article_image"
          sx={{
            width: "325px",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover",
            borderRadius: "4px",
            [bpSMd]: { width: "100%"},
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5px",
          [bpSMu]: { padding: "2px 20px"},
        }}
      >
        {/* title */}
        <Box>
          <Typography
            gutterBottom
            variant="body1"
            onClick={() => window.open(url)}
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              // [bpSMd]: { fontSize: 15},
            }}
          >
            {title}
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography
              gutterBottom
              variant="caption"
              component="text.secondary"
              sx={{ fontWeight: "bold", [bpSMd]: { fontSize: 11} }}
            >
              Short
            </Typography>
            <Typography gutterBottom variant="caption" component="text.secondary" sx={{[bpSMd]: { fontSize: 11}}}>
              {`by ${author || ""} / ${moment(publishedAt).format(
                "MMMM Do YYYY, h:mm a"
              )}`}
            </Typography>
          </Stack>
          <Box sx={{width: 60, height: 2, backgroundColor: "red", marginBottom: "4px"}}></Box>
          <Box sx={{width: 30, height: 2, backgroundColor: "red", marginBottom: "5px"}}></Box>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </Box>
        <Stack direction={"row"} spacing={1} sx={{ marginTop: "10px" }}>
          <Typography gutterBottom variant="body2" component="text.secondary" sx={{[bpSMd]: { fontSize: 11}}}>
            read more at
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            sx={{ fontWeight: "bold", cursor: "pointer", [bpSMd]: { fontSize: 11} }}
            component="text.secondary"
            onClick={() => window.open(url)}
          >
            {source.name || ""}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
