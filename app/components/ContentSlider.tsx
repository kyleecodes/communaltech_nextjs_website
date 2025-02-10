"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const content = [
  {
    type: 'blog',
    title: 'Flexible Backend Development for Open Source',
    description: 'Insights into building accessible tech stacks for open source projects.',
    image: '/images/blog-1.jpg',
    link: '#',
    series: 'Docker'
  },
  {
    type: 'youtube',
    title: 'Demo: Open Sourcery 101',
    description: 'A deep dive into contributing to open source for the first time!',
    link: '#',
    series: 'Open Source'
  },
  {
    type: 'blog',
    title: 'Ollama Local LLM in Cursor for OSS Maintainers',
    description: 'How I use Ollama Local LLM with Cursor to enable AI workflows as an open-source maintainer',
    link: '#',
    series: 'AI'
  },
  {
    type: 'blog',
    title: 'A Love Letter to Crypto',
    description: 'Read my crypto confessions.',
    link: '#',
    series: 'Career Growth'
  },
  {
    type: 'youtube',
    title: 'Demo: Contribute to Fullstack Open Source',
    description: 'We explore how to contribute to fullstack social impact projects on GitHub!',
    link: '#',
    series: 'Open Source'
  },
  {
    type: 'blog',
    title: 'Pull Request Target Guide',
    description: 'A guide to using Pull Request Target to safely & securely merge community pull requests.',
    link: '#',
    series: 'GitHub Actions'
  },
  {
    type: 'podcast',
    title: 'Tomorrows Legendary Code',
    description: 'Visiting the past, present, and future of tech with the best voices in the game.',
    link: '#',
    series: 'MARCH 2025'
  }
];

const glowStyles = {
  boxShadow: '0 0 15px rgba(80, 200, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 25px rgba(80, 200, 255, 0.5)',
    transform: 'translateY(-2px)',
  },
};

export default function ContentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsToShow = isMobile ? 1 : 2;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.length - itemsToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === content.length - itemsToShow ? 0 : prev + 1));
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        {content.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <Card
              key={index}
              onClick={() => handleCardClick(index)}
              sx={{
                flex: 1,
                minWidth: 0,
                height: isExpanded ? 'auto' : 200,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(30, 30, 35, 0.6)',
                borderRadius: 4,
                border: '1px solid rgba(80, 200, 255, 0.2)',
                cursor: 'pointer',
                ...glowStyles
              }}
            >
              <CardContent 
                sx={{ 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  py: 2
                }}
              >
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#50c8ff',
                      textTransform: 'uppercase',
                      display: 'block'
                    }}
                  >
                    {item.type}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(80, 200, 255, 0.7)',
                      textTransform: 'uppercase',
                      display: 'block',
                      '&:before': {
                        content: '"•"',
                        marginRight: '4px'
                      }
                    }}
                  >
                    {item.series}
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#fff', 
                    mb: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'none' : 2,
                    WebkitBoxOrient: 'vertical',
                    fontSize: '1.1rem'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'none' : 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
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
