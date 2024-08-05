import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';
const FeaturesContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FeatureCard = styled.div`
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

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const features = [
  {
    title: 'Automated Attendance Tracking',
    description: 'Effortlessly track attendance with our automated system.',
    icon: 'path_to_icon_1.png'
  },
  {
    title: 'Customizable Reports',
    description: 'Generate detailed, customizable reports for insights.',
    icon: 'path_to_icon_2.png'
  },
  {
    title: 'Integration With Other Systems',
    description: 'Seamlessly integrate with your existing software ecosystem.',
    icon: 'path_to_icon_3.png'
  }
];
const SectionContainer = styled.div`
  padding: 80px 2rem 2rem 2rem; // Adjust the top padding as needed
`;
function KeyFeatures() {
  return (
    <SectionContainer>
    <FeaturesContainer>
      <Title>Key Features</Title>
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <FeatureIcon src={feature.icon} alt={feature.title} />
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesContainer>
    </SectionContainer>
  );
}

export default KeyFeatures;