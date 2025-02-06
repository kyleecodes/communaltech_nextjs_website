"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const glowStyles = {
  boxShadow: '0 0 15px rgba(80, 200, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 25px rgba(80, 200, 255, 0.5)',
    transform: 'translateY(-2px)',
  },
};

const projects = [
  {
    title: 'Developer Community Platform',
    tech: ['React', 'Node.js', 'GraphQL'],
    description: 'A platform for managing developer communities with features for events, content, and analytics.',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Open Source Documentation Tool',
    tech: ['TypeScript', 'Next.js', 'MDX'],
    description: 'An intuitive documentation generator for open source projects with real-time previews.',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Tech Community Analytics',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    description: 'Analytics dashboard for tracking community engagement and growth metrics.',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo-link.com'
  },
  {
    title: 'Developer Education Platform',
    tech: ['Vue.js', 'Firebase', 'TailwindCSS'],
    description: 'Interactive learning platform for developers with hands-on coding exercises and real-time feedback.',
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo-link.com'
  }
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsToShow = isMobile ? 1 : 2;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - itemsToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - itemsToShow ? 0 : prev + 1));
  };

  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflow: 'hidden',
          position: 'relative',
          px: 6,
        }}
      >
        {projects.slice(currentIndex, currentIndex + itemsToShow).map((project, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: 1,
              minWidth: 0,
              backgroundColor: 'rgba(30, 30, 35, 0.6)',
              borderRadius: 4,
              border: '1px solid rgba(80, 200, 255, 0.2)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              ...glowStyles
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  mb: 1,
                  fontSize: '1.1rem'
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 2
                }}
              >
                {project.description}
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  mb: 2
                }}
              >
                {project.tech.map((tech, i) => (
                  <Typography
                    key={i}
                    sx={{
                      px: 1,
                      py: 0.5,
                      bgcolor: 'rgba(80, 200, 255, 0.1)',
                      border: '1px solid rgba(80, 200, 255, 0.2)',
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      color: '#50c8ff'
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ 
                display: 'flex',
                gap: 2,
                mt: 'auto'
              }}>
                <Button
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#50c8ff',
                    }
                  }}
                >
                  Code
                </Button>
                <Button
                  startIcon={<LaunchIcon />}
                  href={project.demo}
                  target="_blank"
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#50c8ff',
                    }
                  }}
                >
                  Demo
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
      
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#50c8ff',
          '&:hover': {
            color: '#fff',
          }
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#50c8ff',
          '&:hover': {
            color: '#fff',
          }
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
} 