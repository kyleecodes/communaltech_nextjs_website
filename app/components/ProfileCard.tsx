"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
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

export default function ProfileCard() {
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
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "flex-start",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: 120 },
            height: { xs: "100%", sm: 120 },
            borderRadius: 4,
            flexShrink: 0,
            mb: { xs: 3, sm: 0 },
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/profile.png"
            alt="Kylee Fields pfp"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
            Hi, I'm Kylee ("Ky" for short) I'm a software engineer with roots in developer advocacy. I specialize in open-source, productivity, and full-stack solutions. 🚀 I share my work <Link href="https://communaltech.notion.site/Kylee-Fields-Communal-Tech-Content-Portfolio-649876b071da4e7dacd8116b89b1ccfe?pvs=4" target="_blank" rel="noopener noreferrer" style={{ color: "#91d7f7", textDecoration: "underline" }}>here</Link>, on <Link href="https://www.linkedin.com/in/kyleecodes/" target="_blank" rel="noopener noreferrer" style={{ color: "#91d7f7", textDecoration: "underline" }}>LinkedIn</Link>, and <Link href="https://github.com/kyleecodes" target="_blank" rel="noopener noreferrer" style={{ color: "#91d7f7", textDecoration: "underline" }}>GitHub</Link>. Here is my background at a glance:
          </Typography>
        </Box>
      </Box>

      <List sx={{ color: "#fff", mb: 2 }}>
        <ListItem>
          <ListItemText primary="⭐ Engineer Developer Enablement – Optimize internal tools, tech stacks, and onboarding processes to enhance developer productivity and reduce friction." />
        </ListItem>

        <ListItem>
          <ListItemText primary="⭐ Drive Open-Source Product Growth – Lead initiatives that accelerate contributions, ecosystem adoption, and user engagement." />
        </ListItem>

        <ListItem>
          <ListItemText primary="⭐ Bridge Engineering with Strategy – Design feedback frameworks for translating developer insights into key business solutions." />
        </ListItem>

        <ListItem>
          <ListItemText primary="⭐ Maintain Knowledge Bases – Build and maintain structured, accessible content & documentation that empower developers to succeed." />
        </ListItem>

        <ListItem>
          <ListItemText primary="⭐ Manage Developer Communities – Successfully onboarded 100+ developers onto open-source and developer tools." />
        </ListItem>
      </List>
    </Paper>
  );
} 