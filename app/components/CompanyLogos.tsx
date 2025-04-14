"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Image from "next/image";

const glowStyles = {
  boxShadow: "0 0 15px rgba(80, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 25px rgba(80, 200, 255, 0.5)",
    transform: "translateY(-2px)",
  },
};

const neonDivider = {
  borderColor: "#50c8ff",
  boxShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
  my: 6,
};

export default function CompanyLogos() {
  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      <Divider sx={neonDivider} />
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 500,
          color: "#50c8ff",
          textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
        }}
      >
        Tech Brands I've Worked With:
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 80,
            height: 80,
            border: "2px solid rgba(80, 200, 255, 0.3)",
            borderRadius: "50%",
            overflow: "hidden",
            ...glowStyles,
          }}
        >
          <Image
            src="/images/chayn.png"
            alt="Chayn Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 80,
            height: 80,
            border: "2px solid rgba(80, 200, 255, 0.3)",
            borderRadius: "50%",
            overflow: "hidden",
            ...glowStyles,
          }}
        >
          <Image
            src="/images/nocodb.png"
            alt="NocoDB Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 80,
            height: 80,
            border: "2px solid rgba(80, 200, 255, 0.3)",
            borderRadius: "50%",
            overflow: "hidden",
            ...glowStyles,
          }}
        >
          <Image
            src="/images/nervosnetwork.png"
            alt="Nervos Network Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 80,
            height: 80,
            border: "2px solid rgba(80, 200, 255, 0.3)",
            borderRadius: "50%",
            overflow: "hidden",
            ...glowStyles,
          }}
        >
          <Image
            src="/images/redhat.png"
            alt="Red Hat Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Stack>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          my: 4,
          color: "#91d7f7",
          textAlign: "center"
        }}
      >
        <Link href="https://blog.chayn.co/how-github-introduced-a-new-chapter-for-open-source-tech-at-chayn-5ff2ad1b6af3" target="_blank" rel="noopener noreferrer" style={{ color: "#91d7f7", textDecoration: "underline" }}>Sponsored by GitHub</Link> to work with digital public goods.
      </Typography>
    </Box>
  );
} 