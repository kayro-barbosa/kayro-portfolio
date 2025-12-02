import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { getTechIcon } from './iconMapping';

function PortfolioBlock({ image, source, title, description, technologies = [] }) {
    const [hover, setHover] = useState(false);

    return (
        <Box 
            position="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ 
                overflow: 'hidden',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' } // Efeito de zoom
            }}
        >
            {/* Imagem do projeto */}
            <Box 
                component="img" 
                src={image} 
                alt={title} 
                width="100%" 
                sx={{ 
                    borderRadius: '10px',
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                    opacity: hover ? 0.3 : 1 // Reduz a opacidade ao passar o cursor
                }}
            />

            {/* Sobreposição ao passar o cursor */}
            <Box 
                position="absolute" 
                top={0} left={0} width="100%" height="100%"
                display="flex" flexDirection="column"
                justifyContent="center" alignItems="center"
                sx={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.8)", 
                    borderRadius: '10px', 
                    opacity: hover ? 1 : 0, 
                    transition: 'opacity 0.3s ease',
                    zIndex: 2
                }}
            >
                <Typography 
                    variant="h6" 
                    color="#00ffa4"
                    fontWeight="bold"
                    sx={{ mb: 2 }} 
                >
                    {title}
                </Typography>
                <Typography color="#ffffff" textAlign="center" sx={{ px: 2, mb: 2 }}>
                    {description}
                </Typography>
                
                {/* Technology Icons */}
                {technologies.length > 0 && (
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            gap: '1rem', 
                            mb: 2,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {technologies.map((tech, index) => {
                            const IconComponent = getTechIcon(tech);
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'transform 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)'
                                        }
                                    }}
                                    title={tech}
                                >
                                    <IconComponent 
                                        style={{ 
                                            fontSize: '1.5rem', 
                                            color: '#00ffa4' 
                                        }} 
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                )}
                
                <Button 
                    variant="contained" 
                    href={source} 
                    target="_blank" 
                    sx={{
                        bgcolor: '#6b47f0',
                        '&:hover': { bgcolor: 'rgba(108, 71, 240, 0.7)' },
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <i className='fa fa-code' style={{ fontSize: '1rem' }} />
                    Source Code
                </Button>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
