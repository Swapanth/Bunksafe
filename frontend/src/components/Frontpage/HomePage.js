import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';
const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const GetStartedButton = styled.button`
  background: linear-gradient(to right, #4a90e2, #e91e63);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
`;

const TrustedCompanies = styled.div`
  margin-top: 3rem;
`;

const JoinCommunity = styled.div`
  margin-top: 3rem;
`;

function HomePage() {
  return (
    <HomeContainer>
      <Title>Attendance Management System</Title>
      <Description>
        Our user-friendly platform automates attendance tracking, provides detailed analytics, and generates insightful reports. Improve attendance rates, ensure accountability, and make data-driven decisions with our secure and customizable tools. Start your free trial today!
      </Description>
      <GetStartedButton>Get Started</GetStartedButton>
      <TrustedCompanies>
        <h2>Trusted Companies</h2>
        {/* Add company logos here */}
      </TrustedCompanies>
      <JoinCommunity>
        <h2>Join Community</h2>
        {/* Add community avatars here */}
      </JoinCommunity>
    </HomeContainer>
  );
}

export default HomePage;