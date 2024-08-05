import React from 'react';
import styled from '@emotion/styled';
// import styled from 'styled-components';

const TeamContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const MemberCard = styled.div`
  background-color: ${props => props.color || '#4a90e2'};
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem;
  color: white;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
`;

const teamMembers = [
  { name: "Team Member 1", role: "Role 1", color: "#4a90e2" },
  { name: "Team Member 2", role: "Role 2", color: "#e91e63" },
  { name: "Team Member 3", role: "Role 3", color: "#4a90e2" }
];

function Team() {
  return (
    <TeamContainer>
      <Title>Meet The Team</Title>
      {teamMembers.map((member, index) => (
        <MemberCard key={index} color={member.color}>
          <MemberName>{member.name}</MemberName>
          <MemberRole>{member.role}</MemberRole>
        </MemberCard>
      ))}
    </TeamContainer>
  );
}

export default Team;