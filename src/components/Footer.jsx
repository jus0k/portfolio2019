import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const S = {
  Footer: styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    z-index: 1000;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    opacity: ${props => (props.isShow ? 1 : 0)};
  `,
  Email: styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    text-decoration: none;
    color: #000;
  `,
  Copyright: styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #000;
  `,
};

const Footer = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 28500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Footer isShow={isShow}>
      <S.Email href="mailto:jusung.design@gmail.com">
        jusung.design@gmail.com
      </S.Email>
      <S.Copyright>© 2020, Jusung Kim.</S.Copyright>
    </S.Footer>
  );
};

export default Footer;
