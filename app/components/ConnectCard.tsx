"use client";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const glowStyles = {
  boxShadow: "0 0 15px rgba(80, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 25px rgba(80, 200, 255, 0.5)",
    transform: "translateY(-2px)",
  },
};

export default function ConnectCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 4,
        backgroundColor: "rgba(30, 30, 35, 0.6)",
        borderRadius: 4,
        border: "1px solid rgba(80, 200, 255, 0.2)",
        ...glowStyles,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "#50c8ff",
            textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
          }}
        >
          Let's Connect!
        </Typography>

        <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
          I'm always open to connecting with passionate technologists:
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:contact@communaltech.com"
            sx={{
              color: "#50c8ff",
              borderColor: "rgba(80, 200, 255, 0.3)",
              px: 3,
              py: 1,
              "&:hover": {
                borderColor: "#50c8ff",
                backgroundColor: "rgba(80, 200, 255, 0.1)",
              },
            }}
          >
            Email Me
          </Button>

          <Button
            variant="outlined"
            startIcon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm3.707-14.707l-4 4C11.512 11.488 11.256 11.5 11 11.5s-.512-.012-.707-.207l-2-2 1.414-1.414L11 9.172l3.293-3.293 1.414 1.414z" />
              </svg>
            }
            href="https://calendly.com/communaltech/coffee-chat-15-30min"
            target="_blank"
            sx={{
              color: "#ff82ff",
              borderColor: "rgba(255, 130, 255, 0.3)",
              px: 3,
              py: 1,
              "&:hover": {
                borderColor: "#ff82ff",
                backgroundColor: "rgba(255, 130, 255, 0.1)",
              },
            }}
          >
            Schedule a Call
          </Button>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: "1px solid rgba(80, 200, 255, 0.2)",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}
          >
            Email: contact@communaltech.com <br />
            Or connect with me on social media,{" "}
            <Link
              href="https://communaltech.notion.site/Kylee-Fields-Communal-Tech-Content-Portfolio-649876b071da4e7dacd8116b89b1ccfe?pvs=4"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              find my socials here
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
} 