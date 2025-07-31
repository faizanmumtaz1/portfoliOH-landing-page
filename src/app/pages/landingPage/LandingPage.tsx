"use client";
import Image from "next/image";
import StepsItem from "@/components/StepsItem/StepsItem";
import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import mainLogo from '../../../assets/mainLogo.png';
import futureImage from '../../../assets/futurePlansImage.png';
import StepOneImage from '../../../assets/accessImage.png';
import StepTwoImage from '../../../assets/coachImage.png';
import StepThreeImage from '../../../assets/discoverImage.png';
import StepFourImage from '../../../assets/PrepareImage.png';
import StepFiveImage from '../../../assets/PlaceImage.png';

export const metadata = {
  title: "My Custom Page Title",
  description: "Page description here",
};

const LandingPage = () => {
  const STEPS_DATA = [
    {
      image: StepOneImage,
      title: 'Access',
      description: 'Future Plans assessments reveal an individual\'s strengths, abilities, interests, and values.'
    },
    {
      image: StepTwoImage,
      title: 'Coach',
      description: 'Future Plans assessments reveal an individual\'s profile, showcasing their abilities, interests, personality, values, and strengths.'
    },
    {
      image: StepThreeImage,
      title: 'Discover',
      description: 'Discovery events bridge exposure gaps in career clusters. Opportunities for discovery often shift interests to aptitudes. Activities include field trips, job shadowing, and exploration courses.'
    },
    {
      image: StepFourImage,
      title: 'Prepare',
      description: 'Preparing for work includes education, internships, work experiences, and short-term credentials.'
    },
    {
      image: StepFiveImage,
      title: 'Place',
      description: 'Securing a job or ongoing training are steps that lead to a career path. An average person works 100,000 hours in their life, so this process continues beyond placement. It is iterative, adapting to workforce needs and personal priorities.'
    },
  ]
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <div className="home-bg-Image">
      <Container sx={{
        height: '100%',
        maxWidth: '100%',
        padding: '0 20px',
        // Custom CSS for tablet view
        '@media (min-width: 600px) and (max-width: 1440px)': {
          padding: '0 40px',
          maxWidth: '100%',
        },
        // Custom CSS for mobile view
        '@media (max-width: 599px)': {
          padding: '0 16px',
          maxWidth: '100%',
        }
      }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          height={'100%'}
          sx={{
            // Custom CSS for tablet view (600px to 1440px)
            '@media (min-width: 600px) and (max-width: 1440px)': {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '20px 0',
              minHeight: '100vh',
              width: '100%',
              maxWidth: '100%',
            },
            // Custom CSS for mobile view
            '@media (max-width: 599px)': {
              width: '100%',
              maxWidth: '100%',
              padding: '20px 0',
            }
          }}
        >
          <Box 
            flex={1} 
            textAlign={isMobile ? "center" : "left"}
            sx={{
              width: '100%',
              maxWidth: '100%',
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                flex: '0 0 45%',
                maxWidth: '45%',
                paddingRight: '15px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              },
              // Custom CSS for mobile view
              '@media (max-width: 599px)': {
                width: '100%',
                maxWidth: '100%',
              }
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '30px',
              justifyContent: isMobile ? 'center' : 'start',
              paddingTop: isMobile ? '20px' : '0',
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                justifyContent: 'start',
                paddingTop: '0',
                flexWrap: 'wrap',
                marginBottom: '25px',
              }
            }}>
              <Image 
                src={mainLogo} 
                alt="logo" 
                height={isMobile ? 26 : 36} 
                width={isMobile ? 80 : 160} 
              />
              <span className="vertical-line"></span>
              <Image 
                src={futureImage} 
                alt="futureImage" 
                height={isMobile ? 26 : 36} 
                width={isMobile ? 150 : 207} 
              />
            </Box>

            <Typography variant="h1" sx={{
              fontSize: isMobile ? '40px' : '60px',
              fontWeight: 'bold',
              lineHeight: isMobile ? '42px' : '64px',
              letterSpacing: '-4%',
              marginBottom: '30px',
              fontFamily: "'circularStdFont', sans-serif",
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                fontSize: '48px',
                lineHeight: '52px',
                marginBottom: '25px',
              }
            }}>
              Find Your <span style={{ color: '#D84441' }}>Future</span>
            </Typography>
            <Typography
              sx={{
                fontSize: '22px',
                fontWeight: '500',
                lineHeight: '28px',
                letterSpacing: '-0.8%',
                color: '#5E5E5F',
                marginBottom: '30px',
                fontFamily: "'circularStdFont', sans-serif",
                // Custom CSS for tablet view
                '@media (min-width: 600px) and (max-width: 1440px)': {
                  fontSize: '20px',
                  lineHeight: '26px',
                  marginBottom: '25px',
                }
              }}>
              Discover your greatness with these 5 steps designed to align your strengths with the world of work. We call this building Actionable Hope.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'start',
              marginBottom: isMobile ? '40px' : 0
            }}>
              <Button
                sx={{
                  fontSize: '19px',
                  letterSpacing: 0,
                  lineHeight: '28.78px',
                  fontWeight: 600,
                  background: '#7200FF',
                  color: '#fff',
                  padding: '15px 26px',
                  borderRadius: '50px',
                  display: 'flex',
                  gap: '10px',
                  textTransform: 'none',
                  transition: 'background 0.3s',
                  '&:hover': {
                    background: '#5b00cc',
                  },
                  // Custom CSS for tablet view
                  '@media (min-width: 600px) and (max-width: 1440px)': {
                    fontSize: '18px',
                    padding: '14px 24px',
                  }
                }}
              >
                Get Started
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.30825 0.279297L7.77094 1.8166L13.8548 7.91132H0.585938V10.0919H13.8548L7.77094 16.1866L9.30825 17.7239L18.0306 9.00161L9.30825 0.279297Z"
                    fill="#DDDDDD"
                  />
                </svg>
              </Button>
            </Box>

          </Box>
          <Box 
            flex={1} 
            width="100%"
            sx={{
              width: '100%',
              maxWidth: '100%',
              // Custom CSS for tablet view - add scroll and proper sizing
              '@media (min-width: 600px) and (max-width: 1440px)': {
                flex: '0 0 55%',
                maxWidth: '55%',
                maxHeight: '100vh',
                overflowY: 'auto',
                paddingRight: '20px',
                paddingLeft: '10px',
                paddingTop: '20px',
                // Custom scrollbar styling
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#a8a8a8',
                },
              },
              // Custom CSS for mobile view
              '@media (max-width: 599px)': {
                width: '100%',
                maxWidth: '100%',
              }
            }}
          >
            {STEPS_DATA.map((data, index) => (
              <StepsItem key={index} data={data} />
            ))}
          </Box>
        </Stack>
      </Container>

    </div>

  );
};

export default LandingPage;

