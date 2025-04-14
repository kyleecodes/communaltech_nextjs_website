"use client";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";

const glowStyles = {
  boxShadow: "0 0 15px rgba(80, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 25px rgba(80, 200, 255, 0.5)",
    transform: "translateY(-2px)",
  },
};

export default function SkillsCard() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          color: "#50c8ff",
          textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
        }}
      >
        Core Skills & Expertise
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            title: "Open-Source Development",
          },
          {
            icon: <TerminalIcon sx={{ fontSize: 40 }} />,
            title: "Full-stack Development",
          },
          {
            icon: <GroupsIcon sx={{ fontSize: 40 }} />,
            title: "Developer Tools",
          },
          {
            icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
            title: "Startups + Scaleups",
          },
          {
            icon: <CloudIcon sx={{ fontSize: 40 }} />,
            title: "Community Management",
          },
          {
            icon: <BuildIcon sx={{ fontSize: 40 }} />,
            title: "Developer Education",
          },
        ].map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                height: "100%",
                backgroundColor: "rgba(30, 30, 35, 0.6)",
                borderRadius: 4,
                border: "1px solid rgba(80, 200, 255, 0.2)",
                ...glowStyles,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    color: "#50c8ff",
                    mb: 1.5,
                    filter: "drop-shadow(0 0 8px rgba(80, 200, 255, 0.5))",
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {skill.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
} 