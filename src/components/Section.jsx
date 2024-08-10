import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaArrowRightLong } from "react-icons/fa6";

const SectionContainer = styled.div`
  padding: 40px 20px;
  background-color: #F9F8FE;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: ${props => (props.$titleAlign === 'center' ? 'center' : 'space-between')};
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  left: 30px;
`;

const Title = styled.h2`
  color: #474747;
  display: flex;
  font-size: 24px;
  text-align: ${props => props.$titleAlign};
`;

const Link = styled.a`
  color: #C92071;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  right: 60px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <SectionContainer>
      <SectionHeader $titleAlign={titleAlign}>
        <Title $titleAlign={titleAlign}>{title}</Title>
        {link && (
          <Link href={link.href}>
            {link.text} <FaArrowRightLong style={{ marginLeft: '10px' }} />
          </Link>
        )}
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;
