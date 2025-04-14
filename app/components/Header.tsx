"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 600,
          mb: 1,
          color: "#50c8ff",
          textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
        }}
      >
        Welcome to Kylee's corner of the internet
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: "#91d7f7",
        }}
      >
      </Typography>
    </Box>
  );
} 