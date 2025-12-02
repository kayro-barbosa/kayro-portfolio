import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef} sx={{ mt: 10 }}>
            <Grid 
                container 
                spacing={10} 
                display={'flex'} 
                justifyContent={'center'}
            >
                {info.portfolio.map((project, index) => (
                    <Grid item xs={14} sm={5} key={index}> 
                        <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={project.source} 
                            title={project.title} 
                            description={project.description}
                            technologies={project.technologies}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}