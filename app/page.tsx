"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ContentSlider from "./components/ContentSlider";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

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

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsToShow = isMobile ? 1 : 2;

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
          Welcome to Kylee's corner of the internet
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: "#91d7f7",
            fontStyle: "italic",
          }}
        >
          Note: This site is in active development as of Feb 2025.
        </Typography>

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
            <Avatar
              src="/images/profile.png"
              alt="Kylee Fields pfp"
              sx={{
                width: { xs: "100%", sm: 120 },
                height: { xs: "100%", sm: 120 },
                // border: '2px solid rgba(80, 200, 255, 0.3)',
                // boxShadow: "0 0 15px rgba(80, 200, 255, 0.2)",
                borderRadius: 4,
                flexShrink: 0,
                mb: { xs: 3, sm: 0 },
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
                Hi, I'm Kylee ("Ky" for short) I'm a developer advocate and
                community-driven developer, passionate about enabling developers
                to build with cutting-edge technologies. Ultimately, I
                specialize in making developer's lives easier.🚀 Here is my work
                at a glance:
              </Typography>
            </Box>
          </Box>

          <List sx={{ color: "#fff", mb: 2 }}>
            {/* <ListItem>
    <ListItemText primary="My work at a glance:" />
  </ListItem> */}

            <ListItem>
              <ListItemText primary="⭐ Grow Developer Communities – Successfully onboarded 100+ developers into open-source and onto developer tools." />
            </ListItem>

            <ListItem>
              <ListItemText primary="⭐ Boost Tech Product Adoption – For users and developers alike, from open-source contributions to ecosystem utilization." />
            </ListItem>

            <ListItem>
              <ListItemText primary="⭐ Technical Content & Strategy – Create engaging, multi-media developer content with key tech influencers, leveraging unique value and data-driven strategies to target the right audience." />
            </ListItem>

            <ListItem>
              <ListItemText primary="⭐ Enhance Developer Experiences – Resolve and identify onboarding gaps, optimize and audit documentation, and automations to support engineers and reduce friction." />
            </ListItem>

            <ListItem>
              <ListItemText primary="⭐ Bridge Tech & Business – Serve as a passionate voice for developers, collaborate across departments to align key decisions with community insights." />
            </ListItem>
          </List>

          {/* <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ mb: 3, color: "#fff" }}>
              Of course there's more to my story! Learn more about me here: 
            </Typography>
          </Box> */}
        </Paper>

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
              I'm always open to connecting with passionate technologists,
              exploring new collaboration opportunities, or just having a chat
              about tech x developer advocacy:
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

        {/* <PhotoCarousel /> */}

{/*         <Typography
          variant="h5"
          sx={{
            // mb: 3,
            color: "#50c8ff",
            textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
          }}
        >
          Latest Content
        </Typography>
        <Typography
          // variant="h5"
          sx={{
            textAlign: "left",
            mb: 2,
            fontSize: 14,
            color: "#ffffff",
            textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
          }}
        >
          <Link
            href="https://communaltech.notion.site/Kylee-Fields-Communal-Tech-Content-Portfolio-649876b071da4e7dacd8116b89b1ccfe?pvs=4"
            style={{ color: "#91d7f7", fontStyle: "italic" }}
          >
            Site in active development: click here for content links.
          </Link>
        </Typography>
        <ContentSlider /> */}

        {/* 
        <Typography
          variant="h5"
          sx={{
            mt: 6,
            mb: 4,
            color: '#50c8ff',
            textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
          }}
        >
          Featured Projects
        </Typography>

        <Typography
            // variant="h5"
            sx={{
              textAlign: "left",
              fontSize: 14,
              color: "#ffffff",
              textShadow: "0 0 10px rgba(80, 200, 255, 0.5)",
            }}
          >
            Coming soon
          </Typography> */}

        {/* <ProjectSlider /> */}

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
              icon: <GroupsIcon sx={{ fontSize: 40 }} />,
              title: "Developer Education",
            },
            {
              icon: <CodeIcon sx={{ fontSize: 40 }} />,
              title: "Open-Source Development",
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
              title: "Startups + Scaleups",
            },
            {
              icon: <TerminalIcon sx={{ fontSize: 40 }} />,
              title: "Fullstack & Testing",
            },
            {
              icon: <CloudIcon sx={{ fontSize: 40 }} />,
              title: "Community Building",
            },
            {
              icon: <BuildIcon sx={{ fontSize: 40 }} />,
              title: "Developer Tools",
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

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                backgroundColor: "rgba(30, 30, 35, 0.6)",
                borderRadius: 4,
                border: "1px solid rgba(255, 130, 255, 0.2)",
                ...glowStyles,
                "&:hover": {
                  boxShadow: "0 0 25px rgba(255, 130, 255, 0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, fontStyle: "italic", color: "#fff" }}
                >
                  "Kylee has been a huge asset to our team, confidently leading
                  the engineering team toward a collaborative open-source
                  approach. She independently shaped her role, improving our
                  developer experience and advocating for our community. In a
                  short time, she built a strong foundation for our open-source
                  community, significantly increasing the development team's
                  capacity. I highly recommend her to future employers."
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#ff82ff" }}
                >
                  Eleanor Re'em
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Senior Software Engineer at Chayn
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                backgroundColor: "rgba(30, 30, 35, 0.6)",
                borderRadius: 4,
                border: "1px solid rgba(255, 130, 255, 0.2)",
                ...glowStyles,
                "&:hover": {
                  boxShadow: "0 0 25px rgba(255, 130, 255, 0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, fontStyle: "italic", color: "#fff" }}
                >
                  "Kylee's exceptional talent for community building and
                  developer education stood out at Nervos Network. She played a
                  pivotal role in educating developers, organizing events, and
                  advocating for our community. Her strategic vision and
                  flawless execution significantly boosted developer engagement
                  and community growth. Any team would be lucky to have her."
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#ff82ff" }}
                >
                  Anubha Maneshwar
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Developer Relations Manager at Nervos Network & Founder
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
            <Avatar
              alt="Company 1 Logo"
              src="/images/chayn.png"
              sx={{
                width: 80,
                height: 80,
                border: "2px solid rgba(80, 200, 255, 0.3)",
                ...glowStyles,
              }}
            />
            <Avatar
              alt="Company 1 Logo"
              src="/images/nocodb.png"
              sx={{
                width: 80,
                height: 80,
                border: "2px solid rgba(80, 200, 255, 0.3)",
                ...glowStyles,
              }}
            />
            <Avatar
              alt="Company 2 Logo"
              src="/images/nervosnetwork.png"
              sx={{
                width: 80,
                height: 80,
                border: "2px solid rgba(80, 200, 255, 0.3)",
                ...glowStyles,
              }}
            />
            <Avatar
              alt="Red Hat Logo"
              src="/images/redhat.png"
              sx={{
                width: 80,
                height: 80,
                border: "2px solid rgba(80, 200, 255, 0.3)",
                ...glowStyles,
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
