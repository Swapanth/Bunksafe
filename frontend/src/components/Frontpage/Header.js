// import React from 'react';
// import { Link } from 'react-router-dom';
// // import styled from 'styled-components';
// import styled from '@emotion/styled';

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #fff;
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   margin: 0;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 1rem;
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: #333;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// function Header() {
//   return (
//     <HeaderContainer>
//       <Logo>Attendance Analysis</Logo>
//       <Nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/docs">Docs</NavLink>
//         <NavLink to="/features">Features</NavLink>
//         <NavLink to="/pricing">Pricing</NavLink>
//         <NavLink to="https://github.com">GitHub</NavLink>
//         <NavLink to="/login">Login</NavLink>
//       </Nav>
//     </HeaderContainer>
//   );
// }

// export default Header;
import React from 'react';
import styled from '@emotion/styled';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Logo>Attendance Analysis</Logo>
      <Nav>
        <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
        <NavLink onClick={() => scrollToSection('benefits')}>Benefits</NavLink>
        <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
        <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
        <NavLink onClick={() => scrollToSection('team')}>Team</NavLink>
        <NavLink href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
        <NavLink onClick={() => scrollToSection('home')}>Login</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;