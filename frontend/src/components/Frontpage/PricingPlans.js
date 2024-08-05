import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';
const PricingContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PlanCard = styled.div`
  background: ${props => props.type === 'basic' ? 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)' : 'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)'};
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem;
  color: white;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlanTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const LearnMoreButton = styled.button`
  background-color: white;
  color: #333;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 1rem;
`;

function PricingPlans() {
  return (
    <PricingContainer>
      <Title>Pricing Plans</Title>
      <PlanCard type="basic">
        <PlanTitle>Basic Plan</PlanTitle>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </PlanCard>
      <PlanCard type="premium">
        <PlanTitle>Premium Plan</PlanTitle>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </PlanCard>
    </PricingContainer>
  );
}

export default PricingPlans;