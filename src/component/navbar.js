import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo_inshorts.png";
import { Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", padding: "5px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box style={{ width: "100%", textAlign: "center" }}>
            <img
              src={Logo}
              alt={"logo"}
              loading="lazy"
              style={{ height: "60px" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
