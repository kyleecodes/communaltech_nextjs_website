"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

export default function IdeasPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
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
          Ideas & Projects
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: "#91d7f7",
          }}
        >
          A collection of learnings, thoughts, ideas, and projects I'm working on or thinking about. Inspired by Michael Heaps blog:{" "}
          <Link
            href="https://michaelheap.com/ideas/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#50c8ff",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            https://michaelheap.com/ideas/
          </Link>
        </Typography>

       Coming soon.
      </Box>
    </Container>
  );
} 