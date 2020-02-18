import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Header: styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 50px;
    z-index: 1000;
    display: flex;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    opacity: ${props => (props.isShow ? 1 : 0)};
  `,
  Logo: styled(Link)`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    width: 30%;
  `,
  Label: styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: #000;
    width: 20%;
  `,
  MenuButton: styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
  `,
  Button: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #000;
  `,
};

const Header = () => {
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
    <S.Header isShow={isShow}>
      <S.Logo to="/">Jusung Kim</S.Logo>
      <S.Label>
        Product Designer <br /> Jusung Kim Portfolio
      </S.Label>
      <S.MenuButton>
        <S.Button></S.Button>
      </S.MenuButton>
    </S.Header>
  );
};

export default Header;
