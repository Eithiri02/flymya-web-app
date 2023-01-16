import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FlymyaLogo from "../../assets/Icons/flymya_logo.png";
import FlagIcon from "../../assets/Icons/language_flag.png";
import ProfileIcon from "../../assets/Icons/flymya_profile.png";

const Navigation = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        pt={2}
      >
        <img
          src={FlymyaLogo}
          style={{ cursor: "pointer", height: 40 }}
          alt="Flymya Logo"
        />
        <div>
          <Stack direction="row" spacing={5}>
            <div style={{ cursor: "pointer", paddingTop: 5, fontSize: 16, fontWeight: 500 }}>Blog</div>
            <img src={FlagIcon} style={{ cursor: "pointer" }} alt="Flag" />
            <img
              src={ProfileIcon}
              style={{ cursor: "pointer" }}
              alt="Profile"
            />
          </Stack>
        </div>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          align="center"
          style={{ color: "#01aeef", fontWeight: "800" }}
        >
          Travel is easy with us
        </Typography>
      </Box>
    </Container>
  );
};

export default Navigation;
