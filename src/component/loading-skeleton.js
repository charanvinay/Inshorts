import { Box, Skeleton, Stack, useTheme } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => {
  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpSMu = theme.breakpoints.up("sm");
  return (
    <Stack
    direction={"row"}
      spacing={{xs: 0, sm:2}}
      sx={{ flexDirection: "row", marginBottom: "30px", [bpSMd]: { flexDirection: "column" } }}
    >
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{ width: "350px", height: "250px",  }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "2rem",width: "500px", [bpSMd]: { width: "100%" } }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "0.6rem", width: "150px", marginBottom: "10px", [bpSMd]: { width: "40%" }  }}
          />
        </Box>
        <Box sx={{ marginBottom: "100px" }}>
          {[1, 2, 3, 4, 5, 6].map((text) => (
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "0.8rem", [bpSMd]: { width: "100%" } }}
            />
          ))}
        </Box>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "0.6rem",width: "180px",  marginBottom: "10px", [bpSMd]: { width: "40%" } }}
        />
      </Box>
    </Stack>
  );
};

export default LoadingSkeleton;
