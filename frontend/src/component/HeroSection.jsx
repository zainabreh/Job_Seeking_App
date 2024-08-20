import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

/**
 * Design credit: https://flutter.dev/
 */

export default function HeroSection() {
  const [color, setColor] = React.useState("primary");
  return (
    <>
      <Sheet
        variant="solid"
        color={color}
        invertedColors
        sx={{
          zIndex: -1,
          flexGrow: 1,
          display: "flex",
          bgcolor: color === "primary" ? "#042449" : undefined,
          p: { xs: "36px", md: "150px" },
          pt: { xs: "24px", md: "70px" },
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
          // borderRadius: 'lg',
          // '& button': { borderRadius: 'xl' },
        }}
      >
        <Box sx={{ zIndex: 1, position: "relative" }}>
          <Typography level="h1" sx={{
            mb:5
          }}>
            Get Your  {"      "}
            <Typography sx={{ color: "#3881BC" }}>Dream Job</Typography> Today!
          </Typography>
        </Box>

        <Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1,zIndex:10 }}
              placeholder="Search Jobs"
              inputProps={{ "aria-label": "Search Jobs" }}
            />
            <IconButton type="button" sx={{ p: "10px", color:"black",zIndex:10 }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>

        <Box
          component="img"
          alt=""
          src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
          sx={{ position: "absolute", height: "100%", top: 0, right: 0 ,zIndex:-1}}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            borderRadius: "50%",
          }}
          onClick={() => {
            const colors = [
              "primary",
              "neutral",
              "danger",
              "success",
              "warning",
            ];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
      </Sheet>
    </>
  );
}
