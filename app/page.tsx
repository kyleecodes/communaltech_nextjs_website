"use client";


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ContentSlider from './components/ContentSlider';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

const glowStyles = {
  boxShadow: '0 0 15px rgba(80, 200, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 25px rgba(80, 200, 255, 0.5)',
    transform: 'translateY(-2px)',
  },
};

const neonDivider = {
  borderColor: '#50c8ff',
  boxShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
  my: 6,
};

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsToShow = isMobile ? 1 : 2;

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: '#50c8ff',
            textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
          }}
        >
          Welcome to Kylee's corner of the internet 🌐
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            backgroundColor: 'rgba(30, 30, 35, 0.6)',
            borderRadius: 4,
            border: '1px solid rgba(80, 200, 255, 0.2)',
            ...glowStyles
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'flex-start',
            mb: 3,
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <Avatar
              src="/images/profile.png"
              alt="Kylee Fields"
              sx={{
                width: { xs: '100%', sm: 120 },
                height: { xs: 240, sm: 120 },
                border: '2px solid rgba(80, 200, 255, 0.3)',
                boxShadow: '0 0 15px rgba(80, 200, 255, 0.2)',
                borderRadius: 4,
                flexShrink: 0,
                mb: { xs: 3, sm: 0 }
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                Hi, I'm Kylee ("Ky" for short) I'm an open-source developer and developer advocate, passionate about empowering developers through education and open-source. 🚀
              </Typography>


            </Box>
          </Box>
          <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
            Since 2021, I've built strong developer communities, technical education programs, tech product adoption strategies, and software engineering solutions. Working mainly with engineers, along with product, marketing, and leadership, I specialize in cultivating collaborative environments, ensuring efficiency and happiness as a skilled inter-department communicator for global tech organizations.
          </Typography>

          <Typography variant="body1" sx={{ color: '#fff', mb: 0 }}>
          Through Communal Tech, I’ve partnered with open-source startups, blockchain innovators, and social impact orgs to create community-driven software solutions.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ mb: 3, color: '#fff' }}>
              Let's Connect! 🤝 I am always looking to collaborate with passionate technologists and organizations.
            </Typography>
          </Box>
        </Paper>


        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            backgroundColor: 'rgba(30, 30, 35, 0.6)',
            borderRadius: 4,
            border: '1px solid rgba(80, 200, 255, 0.2)',
            ...glowStyles
          }}
        >

          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: '#50c8ff',
                textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
              }}
            >
              Let's Work Together!
            </Typography>

            <Typography variant="body1" sx={{ color: '#fff', mb: 3 }}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech and community building.
            </Typography>

            <Box sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mb: 4
            }}>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href="mailto:contact@communaltech.com"
                sx={{
                  color: '#50c8ff',
                  borderColor: 'rgba(80, 200, 255, 0.3)',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    borderColor: '#50c8ff',
                    backgroundColor: 'rgba(80, 200, 255, 0.1)',
                  }
                }}
              >
                Email Me
              </Button>

              <Button
                variant="outlined"
                startIcon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm3.707-14.707l-4 4C11.512 11.488 11.256 11.5 11 11.5s-.512-.012-.707-.207l-2-2 1.414-1.414L11 9.172l3.293-3.293 1.414 1.414z" />
                  </svg>
                }
                href="https://calendly.com/communaltech/coffee-chat-15-30min"
                target="_blank"
                sx={{
                  color: '#ff82ff',
                  borderColor: 'rgba(255, 130, 255, 0.3)',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    borderColor: '#ff82ff',
                    backgroundColor: 'rgba(255, 130, 255, 0.1)',
                  }
                }}
              >
                Schedule a Call
              </Button>
            </Box>

            <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(80, 200, 255, 0.2)' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                Email: contact@communaltech.com <br />
                Or connect with me on social media, <Link href="/social" style={{ color: 'inherit', textDecoration: 'underline' }}>see my content here</Link>.
              </Typography>
            </Box>
          </Box>
        </Paper>


        {/* <PhotoCarousel /> */}

        <Typography
          variant="h5"
          sx={{
            mb: 3,
            color: '#50c8ff',
            textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
          }}
        >
          Latest Content
        </Typography>
        <ContentSlider />

        {/* <Typography
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

        <ProjectSlider /> */}

        <Typography
          variant="h5"
          sx={{
            mt: 6,
            mb: 4,
            color: '#50c8ff',
            textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
          }}
        >
          Core Skills & Expertise
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            {
              icon: <GroupsIcon sx={{ fontSize: 40 }} />,
              title: 'Developer Education'
            },
            {
              icon: <CodeIcon sx={{ fontSize: 40 }} />,
              title: 'Open-Source Development'
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
              title: 'Startups + Scaleups'
            },
            {
              icon: <TerminalIcon sx={{ fontSize: 40 }} />,
              title: 'Fullstack & Testing'
            },
            {
              icon: <CloudIcon sx={{ fontSize: 40 }} />,
              title: 'Cloud Technologies'
            },
            {
              icon: <BuildIcon sx={{ fontSize: 40 }} />,
              title: 'Developer Tools + AI'
            }
          ].map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  height: '100%',
                  backgroundColor: 'rgba(30, 30, 35, 0.6)',
                  borderRadius: 4,
                  border: '1px solid rgba(80, 200, 255, 0.2)',
                  ...glowStyles
                }}
              >
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  py: 1
                }}>
                  <Box sx={{
                    color: '#50c8ff',
                    mb: 1.5,
                    filter: 'drop-shadow(0 0 8px rgba(80, 200, 255, 0.5))'
                  }}>
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: '1.1rem'
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
                height: '100%',
                backgroundColor: 'rgba(30, 30, 35, 0.6)',
                borderRadius: 4,
                border: '1px solid rgba(255, 130, 255, 0.2)',
                ...glowStyles,
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 130, 255, 0.5)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <CardContent>
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: '#fff' }}>
                  "Kylee has been a huge asset to our tea,, confidently leading the engineering team toward a collaborative open-source approach. She independently shaped her role, improving our developer experience and advocating for our community. In a short time, she built a strong foundation for our open-source community, significantly increasing the development team's capacity. I highly recommend her to future employers."
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff82ff' }}>
                  Eleanor Re'em
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Senior Software Engineer at Chayn
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                backgroundColor: 'rgba(30, 30, 35, 0.6)',
                borderRadius: 4,
                border: '1px solid rgba(255, 130, 255, 0.2)',
                ...glowStyles,
                '&:hover': {
                  boxShadow: '0 0 25px rgba(255, 130, 255, 0.5)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <CardContent>
                <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: '#fff' }}>
                  "Kylee's exceptional talent for community building and developer education stood out at Nervos Network. She played a pivotal role in educating developers, organizing events, and advocating for our community. Her strategic vision and flawless execution significantly boosted developer engagement and community growth. Any team would be lucky to have her."
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff82ff' }}>
                  Anubha Maneshwar
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
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
              textAlign: 'center',
              mb: 4,
              fontWeight: 500,
              color: '#50c8ff',
              textShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
            }}
          >
            Tech Brands I've Worked With:
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Avatar
              alt="Company 1 Logo"
              src="/images/chayn.png"
              sx={{
                width: 80,
                height: 80,
                border: '2px solid rgba(80, 200, 255, 0.3)',
                ...glowStyles
              }}
            />
            <Avatar
              alt="Company 1 Logo"
              src="/images/nocodb.png"
              sx={{
                width: 80,
                height: 80,
                border: '2px solid rgba(80, 200, 255, 0.3)',
                ...glowStyles
              }}
            />
            <Avatar
              alt="Company 2 Logo"
              src="/images/nervosnetwork.png"
              sx={{
                width: 80,
                height: 80,
                border: '2px solid rgba(80, 200, 255, 0.3)',
                ...glowStyles
              }}
            />
            <Avatar
              alt="Red Hat Logo"
              src="/images/redhat.png"
              sx={{
                width: 80,
                height: 80,
                border: '2px solid rgba(80, 200, 255, 0.3)',
                ...glowStyles
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
