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
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  
  return (
    <div className="home-bg-Image">
      <Container sx={{
        maxWidth: '100%',
        padding: '0 20px',
        // Custom CSS for desktop view (above 1440px)
        '@media (min-width: 1441px)': {
          height: '100%',
        },
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
          direction={isMobile || isTablet ? "column" : "row"}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            // Custom CSS for desktop view (above 1440px)
            '@media (min-width: 1441px)': {
              height: '100%',
            },
            // Custom CSS for tablet view (600px to 1440px)
            '@media (min-width: 600px) and (max-width: 1440px)': {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              padding: '40px 0',
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
            textAlign={isMobile || isTablet ? "center" : "left"}
            sx={{
              width: '100%',
              maxWidth: '100%',
              // Custom CSS for desktop view (above 1440px)
              '@media (min-width: 1441px)': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              },
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                flex: 'none',
                maxWidth: '600px',
                paddingRight: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
              justifyContent: isMobile || isTablet ? 'center' : 'start',
              paddingTop: isMobile ? '20px' : '0',
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                justifyContent: 'center',
                paddingTop: '0',
                flexWrap: 'wrap',
                marginBottom: '30px',
              }
            }}>
              <Image 
                src={mainLogo} 
                alt="logo" 
                height={isMobile ? 26 : isTablet ? 32 : 36} 
                width={isMobile ? 80 : isTablet ? 140 : 160} 
              />
              <span className="vertical-line"></span>
              <Image 
                src={futureImage} 
                alt="futureImage" 
                height={isMobile ? 26 : isTablet ? 32 : 36} 
                width={isMobile ? 150 : isTablet ? 180 : 207} 
              />
            </Box>

            <Typography variant="h1" sx={{
              fontSize: isMobile ? '40px' : isTablet ? '52px' : '60px',
              fontWeight: 'bold',
              lineHeight: isMobile ? '42px' : isTablet ? '56px' : '64px',
              letterSpacing: '-4%',
              marginBottom: '30px',
              fontFamily: "'circularStdFont', sans-serif",
              // Custom CSS for tablet view
              '@media (min-width: 600px) and (max-width: 1440px)': {
                fontSize: '52px',
                lineHeight: '56px',
                marginBottom: '30px',
                textAlign: 'center',
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
                  fontSize: '22px',
                  lineHeight: '28px',
                  marginBottom: '30px',
                  textAlign: 'center',
                }
              }}>
              Discover your greatness with these 5 steps designed to align your strengths with the world of work. We call this building Actionable Hope.
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: isMobile || isTablet ? 'center' : 'start',
              marginBottom: isMobile || isTablet ? '40px' : 0
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
                    fontSize: '19px',
                    padding: '15px 26px',
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
              // Custom CSS for desktop view (above 1440px)
              '@media (min-width: 1441px)': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
              },
              // Custom CSS for tablet view - remove scroll and use full width
              '@media (min-width: 600px) and (max-width: 1440px)': {
                flex: 'none',
                maxWidth: '600px',
                paddingRight: '0',
                paddingLeft: '0',
                paddingTop: '0',
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

