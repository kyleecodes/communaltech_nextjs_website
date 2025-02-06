"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
];

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('left');

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideDirection('left');
            setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handlePrevious = () => {
        setSlideDirection('right');
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSlideDirection('left');
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{
            position: 'relative',
            mb: 4,
            height: 200,
            maxWidth: '600px',
            mx: 'auto',
            overflow: 'hidden',
            borderRadius: 2,
        }}>
            {photos.map((photo, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transform: `translateX(${(index - currentIndex) * 100}%)`,
                        transition: 'transform 0.5s ease-in-out',
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component="img"
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 2,
                            border: '1px solid rgba(80, 200, 255, 0.2)',
                            boxShadow: '0 0 15px rgba(80, 200, 255, 0.3)',
                        }}
                    />
                </Box>
            ))}

            <IconButton
                onClick={handlePrevious}
                sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }
                }}
            >
                <ArrowBackIcon />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }
                }}
            >
                <ArrowForwardIcon />
            </IconButton>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    zIndex: 1,
                }}
            >
                {photos.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: currentIndex === index ? '#50c8ff' : '#fff',
                            transition: 'background-color 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                        }}
                        onClick={() => {
                            setSlideDirection(index > currentIndex ? 'left' : 'right');
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
} 