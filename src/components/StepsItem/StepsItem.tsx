import React from 'react'
import Image from "next/image";
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
const StepsItem = ({ data }: any) => {

    const { title, image, description } = data
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Stack direction={isMobile ? 'column' : 'row'} mb={'40px'} justifyContent={isMobile ? 'center' : 'start'} alignItems={isMobile ? 'center' : 'start'}>
            <Image src={image} alt={title} height={122} width={148} />
            <Box>
                <Typography variant='h5' sx={{
                    fontSize: '23px',
                    fontWeight: 'bold',
                    lineHeight: '28px',
                    letterSpacing: '-0.8%', textAlign: isMobile ? 'center' : 'start',
                    marginBottom: isMobile ? '10px' : '10px',
                    fontFamily: "'circularStdFont', sans-serif"
                }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '1.2em',
                        letterSpacing: '-0.8%',
                        color: '#4E4C47',
                        textAlign: isMobile ? 'center' : 'start',
                        marginBottom: isMobile ? '10px' : 0,
                        fontFamily: "'circularStdFont', sans-serif"
                    }}>
                    {description}
                </Typography>
            </Box>
        </Stack>
    )
}

export default StepsItem