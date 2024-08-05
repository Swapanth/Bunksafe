import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';
const BenefitsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const BenefitCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const benefits = [
  {
    title: 'Improved Student Performance',
    icon: 'path_to_icon_1.png'
  },
  {
    title: 'Reduced Administrative Workload',
    icon: 'path_to_icon_2.png'
  },
  {
    title: 'Increased Transparency',
    icon: 'path_to_icon_3.png'
  }
];

const SectionContainer = styled.div`
  padding: 80px 2rem 2rem 2rem; // Adjust the top padding as needed
`;

function Benefits() {
  return (
    <SectionContainer>
    <BenefitsContainer>
      <Title>Benefits</Title>
      {benefits.map((benefit, index) => (
        <BenefitCard key={index}>
          <BenefitIcon src={benefit.icon} alt={benefit.title} />
          <BenefitTitle>{benefit.title}</BenefitTitle>
        </BenefitCard>
      ))}
    </BenefitsContainer>
    </SectionContainer>
  );
}

export default Benefits;