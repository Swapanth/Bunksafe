import React from "react";
import {
  Container,
  Typography,
  Grid,
  Link,
  Button,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BunkInLogo from './BunkInLogo ';


// SVG Icons
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF3366"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.46 6.003a8.53 8.53 0 0 1-2.357.645 4.157 4.157 0 0 0 1.81-2.293 8.288 8.288 0 0 1-2.605.993 4.141 4.141 0 0 0-7.05 3.779c0 .32.036.633.106.933A11.72 11.72 0 0 1 2.5 5.158a4.125 4.125 0 0 0 1.283 5.52A4.089 4.089 0 0 1 2 10.68v.048a4.14 4.14 0 0 0 3.317 4.058 4.166 4.166 0 0 1-1.854.07 4.138 4.138 0 0 0 3.868 2.873 8.29 8.29 0 0 1-5.138 1.775A8.429 8.429 0 0 1 0 18.216a11.682 11.682 0 0 0 6.29 1.839c7.55 0 11.688-6.257 11.688-11.688 0-.18-.005-.359-.012-.537A8.303 8.303 0 0 0 22.46 6.003z" fill="#1DA1F2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.867 8.16 6.84 9.48.5.09.68-.217.68-.48v-1.743c-2.76.598-3.34-1.33-3.34-1.33-.45-1.144-1.096-1.452-1.096-1.452-.896-.613.068-.601.068-.601 1.002.07 1.528 1.035 1.528 1.035.888 1.52 2.332 1.079 2.898.828.094-.643.349-1.079.635-1.327-2.22-.254-4.56-1.11-4.56-4.944 0-1.092.392-1.989 1.036-2.693-.103-.254-.45-1.272.099-2.652 0 0 .837-.268 2.74 1.022.795-.222 1.653-.333 2.508-.337.855.004 1.713.115 2.508.337 1.906-1.29 2.74-1.022 2.74-1.022.548 1.38.205 2.398.103 2.652.644.704 1.036 1.601 1.036 2.693 0 3.836-2.34 4.692-4.56 4.944.358.306.68.888.68 1.786v2.645c0 .264.181.574.68.48C21.133 20.16 24 16.418 24 12c0-5.52-4.48-10-10-10z" fill="#333"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5C4.98 4.88 6.03 6 7.5 6S10.02 4.88 10.02 3.5 8.97 1 7.5 1 4.98 2.12 4.98 3.5zM7.5 0C5.01 0 3 2.01 3 4.5S5.01 9 7.5 9 12 6.99 12 4.5 9.99 0 7.5 0zM16.5 9h-2.5V7c0-.55-.45-1-1-1s-1 .45-1 1v2H9.5c-.55 0-1 .45-1 1s.45 1 1 1h2.5v6.5c0 .55.45 1 1 1s1-.45 1-1V11h2.5c.55 0 1-.45 1-1s-.45-1-1-1zM4 9.5H1.5c-.55 0-1 .45-1 1s.45 1 1 1H4c.55 0 1-.45 1-1s-.45-1-1-1zM2.5 8h1V9.5h-1V8zM4 7.5c-.55 0-1 .45-1 1v2H1.5c-.55 0-1 .45-1 1s.45 1 1 1H3v1.5c0 .55.45 1 1 1s1-.45 1-1V11h1.5c.55 0 1-.45 1-1s-.45-1-1-1H4V8c0-.55-.45-1-1-1zM16.5 9h-2.5V7c0-.55-.45-1-1-1s-1 .45-1 1v2H9.5c-.55 0-1 .45-1 1s.45 1 1 1h2.5v6.5c0 .55.45 1 1 1s1-.45 1-1V11h2.5c.55 0 1-.45 1-1s-.45-1-1-1z" fill="#0077B5"/>
  </svg>
);


const FooterPaper = styled(Paper)(({ theme }) => ({
  background: "white",
  padding: theme.spacing(6, 0),
  width: "100%",
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
}));

const DonateButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1E2330",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "10px 24px",
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  display: "flex",
  gap: '8px',
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#2C3340",
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#1A1D1F",
  textDecoration: "none",
  display: "block",
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: theme.spacing(1.5),
  transition: 'color 0.2s ease',
  "&:hover": {
    color: "#C471ED",
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  color: "#6E7491",
  fontSize: '16px',
  fontWeight: 400,
  marginBottom: theme.spacing(2.5),
}));

const SocialIconsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

const Footer = () => {
  return (
    <FooterPaper elevation={0}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid
            item
            xs={12}
            md={3}
            
          >
<Box sx={{
              background: "linear-gradient(135deg, #C471ED 0%, rgba(196, 113, 237, 0.1) 100%)",
              borderRadius: "12px",
              padding: theme => theme.spacing(4),
            }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                fontSize: '20px',
                marginBottom: 2,
                color: '#1A1D1F'
              }}
            >
              Support Our Development
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                marginBottom: 3,
                color: '#6E7491',
                lineHeight: '24px'
              }}
            >
              Contribute to our development efforts to enhance the attendance analytics platform and make it better for everyone.
            </Typography>
            <DonateButton variant="contained">
              Donate Now <HeartIcon />
            </DonateButton>
            </Box>
          </Grid>

          <Grid item xs={'12'} sm={6} md={3}>
            <FooterHeading>Resources</FooterHeading>
            <FooterLink href="#">Attendance Tips</FooterLink>
            <FooterLink href="#">How to Use the Dashboard</FooterLink>
            <FooterLink href="#">Student Engagement Strategies</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </Grid>

          <Grid item xs={'12'} sm={6} md={3}>
            <FooterHeading>Company</FooterHeading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Grid>

          <Grid item xs={'12'} md={3}>
            <FooterHeading>Follow Us</FooterHeading>
            <SocialIconsContainer>
              <TwitterIcon />
              <GitHubIcon />
              <LinkedInIcon />
            </SocialIconsContainer>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: -1 }}>
          <BunkInLogo />
        </Box>
      </Container>
    </FooterPaper>
  );
};

export default Footer;
