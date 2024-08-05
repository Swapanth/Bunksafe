import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';
const FAQContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const QuestionCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  font-size: 1rem;
`;

const faqs = [
  {
    question: "How does the attendance tracking system work?",
    answer: "Our system uses advanced technology to automatically track attendance..."
  },
  {
    question: "Can I customize the reports?",
    answer: "Yes, our system allows for full customization of reports to meet your specific needs..."
  },
  // Add more FAQs as needed
];

function FAQ() {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      {faqs.map((faq, index) => (
        <QuestionCard key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </QuestionCard>
      ))}
    </FAQContainer>
  );
}

export default FAQ;